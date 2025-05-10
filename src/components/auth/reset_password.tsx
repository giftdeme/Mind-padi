"use client";

import {
    handleResetPassword,
    handleVerifyPasswordResetToken,
} from "@/actions/auth";
import type { RequestState } from "@/lib/common/types";
import { passwordSchema } from "@/lib/schema";
import Checkmark from "@/svg/auth/checkmark.svg";
import Key from "@/svg/auth/key.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../button";
import { PasswordInput } from "./input";

const ResetPasswordSchema = z
    .object({
        password: passwordSchema,
        confirmPassword: z.string().min(1, {
            message: "Confirm password is required",
        }),
    })
    .superRefine(({ password, confirmPassword }, ctx) => {
        if (password !== confirmPassword) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["confirmPassword"],
                message: "Passwords do not match",
            });
        }
    });

export default function ResetPassword() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [resetPasswordState, setResetPasswordState] = useState<RequestState>({
        isLoading: false,
        isSuccess: false,
        error: "",
    });
    const [verificationTokenState, setVerificationTokenState] =
        useState<RequestState>({
            isLoading: false,
            isSuccess: false,
            error: "",
        });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof ResetPasswordSchema>>({
        resolver: zodResolver(ResetPasswordSchema),
    });

    const token = searchParams.get("token");

    useEffect(() => {
        if (!token) return;

        setVerificationTokenState((prev) => ({
            ...prev,
            isLoading: true,
        }));

        handleVerifyPasswordResetToken(token).then((newState) =>
            setVerificationTokenState(newState),
        );
    }, [token]);

    const onSubmitHandler = async (
        data: z.infer<typeof ResetPasswordSchema>,
    ) => {
        setResetPasswordState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        if (!token) return;
        await handleResetPassword(token, data.password).then((newState) =>
            setResetPasswordState(newState),
        );
    };
    return (
        <div className="flex min-h-dvh items-center justify-center px-4 py-8">
            <div className="w-full max-w-md space-y-6">
                {verificationTokenState.isLoading && (
                    <p className="text-gray-700 text-sm">Verifying token...</p>
                )}
                {verificationTokenState.isSuccess ? (
                    <>
                        <div className="flex flex-col items-center justify-between space-y-6">
                            {resetPasswordState.isSuccess ? (
                                <Checkmark />
                            ) : (
                                <Key />
                            )}

                            <div className="space-y-3 text-center">
                                <h1 className="font-bold text-3xl text-gray-900">
                                    {resetPasswordState.isSuccess
                                        ? "Password reset"
                                        : "Set new password"}
                                </h1>

                                <p className="text-gray-700">
                                    {resetPasswordState.isSuccess
                                        ? "Your password has been successfully reset. Click below to log in magically."
                                        : "Your new password must be different to previously used passwords."}
                                </p>
                            </div>
                        </div>

                        {resetPasswordState.isSuccess ? (
                            <Button
                                onClick={() =>
                                    router.push("/sign-in", { scroll: false })
                                }
                                size={"lg"}
                                className="w-full rounded-full"
                            >
                                Continue &rarr;
                            </Button>
                        ) : (
                            <form
                                onSubmit={handleSubmit(onSubmitHandler)}
                                className="space-y-6"
                            >
                                <PasswordInput
                                    id="password"
                                    placeholder="New password"
                                    {...register("password")}
                                    error={errors.password}
                                />

                                <PasswordInput
                                    id="confirmPassword"
                                    label={<>Confirm Password</>}
                                    placeholder="Confirm new password"
                                    {...register("confirmPassword")}
                                    error={errors.confirmPassword}
                                />

                                <Button
                                    type="submit"
                                    size={"lg"}
                                    className="w-full rounded-full"
                                >
                                    Reset Password &rarr;
                                </Button>
                            </form>
                        )}

                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() =>
                                    router.push("/sign-in", { scroll: false })
                                }
                                className="cursor-pointer font-medium text-sm hover:text-primary hover:underline"
                            >
                                &larr; Back to log in
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-sm">
                        Invalid or expired token. Please{" "}
                        <button
                            type="button"
                            className="cursor-pointer font-medium text-primary text-sm hover:underline"
                            onClick={() =>
                                router.push("/forgot-password", {
                                    scroll: false,
                                })
                            }
                        >
                            request
                        </button>{" "}
                        a new password reset link.
                    </div>
                )}
            </div>
        </div>
    );
}

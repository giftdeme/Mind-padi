"use client";

import { handleForgotPassword } from "@/actions/auth";
import type { RequestState } from "@/lib/common/types";
import { emailSchema } from "@/lib/schema";
import Key from "@/svg/auth/key.svg";
import Mail from "@/svg/auth/mail.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../button";
import { EmailInput } from "./input";

const forgotPasswordSchema = z.object({
    email: emailSchema,
});

export default function ForgotPassword() {
    const router = useRouter();
    const [forgotPasswordState, setForgotPasswordState] =
        useState<RequestState>({
            isLoading: false,
            isSuccess: false,
            error: "",
        });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const email = watch("email");
    const onSubmitHandler = async (
        data: z.infer<typeof forgotPasswordSchema>,
    ) => {
        setForgotPasswordState((prev) => ({
            ...prev,
            isLoading: true,
        }));

        await handleForgotPassword(data.email).then((newState) =>
            setForgotPasswordState(newState),
        );
    };

    return (
        <div className="flex min-h-dvh items-center justify-center px-4 py-8">
            <div className="w-full max-w-md space-y-6">
                <div className="flex flex-col items-center justify-between space-y-6">
                    {forgotPasswordState.isSuccess ? <Mail /> : <Key />}

                    <div className="space-y-3 text-center">
                        <h1 className="font-bold text-3xl text-gray-900">
                            {forgotPasswordState.isSuccess
                                ? "Check your email"
                                : "Forgot password?"}
                        </h1>

                        <p className=" text-gray-700">
                            {forgotPasswordState.isSuccess
                                ? `We sent a password reset link to ${email}`
                                : "No worries, we'll send you reset instructions."}
                        </p>
                    </div>
                </div>
                {forgotPasswordState.isSuccess ? (
                    <Button size={"lg"} className="w-full rounded-full" asChild>
                        <Link
                            href="https://mail.google.com/mail/u/0/#inbox"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Open email app &rarr;
                        </Link>
                    </Button>
                ) : (
                    <form
                        onSubmit={handleSubmit(onSubmitHandler)}
                        className="space-y-6"
                    >
                        <EmailInput
                            id="email"
                            placeholder="Enter your email"
                            {...register("email")}
                            error={errors.email}
                        />

                        <Button
                            type="submit"
                            size={"lg"}
                            className="w-full rounded-full"
                            disabled={forgotPasswordState.isLoading}
                        >
                            Reset Password &rarr;
                        </Button>
                    </form>
                )}

                <div className="text-center text-gray-700">
                    Didn't receive the email?{" "}
                    <button
                        type="button"
                        onClick={() => onSubmitHandler({ email })}
                        className="cursor-pointer font-medium text-primary text-sm hover:underline"
                        disabled={forgotPasswordState.isLoading}
                    >
                        Click to resend
                    </button>
                </div>

                <div className="text-center">
                    <button
                        type="button"
                        onClick={() =>
                            router.push("/sign-in", { scroll: false })
                        }
                        className="cursor-pointer font-medium text-sm hover:text-primary hover:underline"
                        disabled={forgotPasswordState.isLoading}
                    >
                        &larr; Back to log in
                    </button>
                </div>
            </div>
        </div>
    );
}

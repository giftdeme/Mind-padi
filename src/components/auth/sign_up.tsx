"use client";

import { handleSignUp } from "@/actions/auth";
import getEnv from "@/lib/common/env";
import type { RequestState } from "@/lib/common/types";
import { useEmail } from "@/lib/context";
import { emailSchema, passwordSchema } from "@/lib/schema";
import Google from "@/svg/auth/google.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../button";
import { EmailInput, PasswordInput } from "./input";

const SignUpSchema = z
    .object({
        email: emailSchema,
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

export default function SignUp() {
    const router = useRouter();
    const [registrationState, setRegistrationState] = useState<RequestState>({
        isLoading: false,
        isSuccess: false,
        error: "",
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
    });
    const { setEmail } = useEmail();
    const onSubmitHandler = async (data: z.infer<typeof SignUpSchema>) => {
        setRegistrationState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        await handleSignUp(data.email, data.password).then((newState) =>
            setRegistrationState(newState),
        );
        if (!registrationState.isSuccess) return;
        setEmail(data.email);
        router.push("/verify-email", { scroll: false });
    };
    return (
        <div className="flex min-h-dvh items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="font-bold text-3xl text-gray-900">
                        Sign Up
                    </h1>
                    <button
                        type="button"
                        onClick={() =>
                            router.push("/sign-in", { scroll: false })
                        }
                        aria-label="Sign in"
                        className="font-medium text-gray-500 text-lg hover:text-gray-700"
                    >
                        Log in
                    </button>
                </div>

                <p className="mb-8 text-gray-700">
                    Start your 30-day free trial.
                </p>

                <form
                    onSubmit={handleSubmit(onSubmitHandler)}
                    className="space-y-6"
                >
                    <EmailInput
                        id="email"
                        label={
                            <>
                                Email <span className="text-red-500">*</span>
                            </>
                        }
                        placeholder="Enter your email"
                        {...register("email")}
                        error={errors.email}
                    />

                    <PasswordInput
                        id="password"
                        label={
                            <>
                                Password <span className="text-red-500">*</span>
                            </>
                        }
                        placeholder="Create a password"
                        {...register("password")}
                        error={errors.password}
                    />

                    <PasswordInput
                        id="confirmPassword"
                        label={
                            <>
                                Confirm Password{" "}
                                <span className="text-red-500">*</span>
                            </>
                        }
                        placeholder="Enter password"
                        {...register("confirmPassword")}
                        error={errors.confirmPassword}
                    />

                    {registrationState.error && (
                        <p className="text-red-500 text-sm">
                            {registrationState.error}
                        </p>
                    )}

                    <Button
                        type="submit"
                        size={"lg"}
                        className="w-full rounded-full"
                        disabled={registrationState.isLoading}
                    >
                        {registrationState.isLoading ? (
                            "Getting Started..."
                        ) : (
                            <>Get Started &rarr;</>
                        )}
                    </Button>
                </form>

                <div className="my-6 flex items-center">
                    <span className="flex-grow border-gray-300 border-t" />
                    <span className="mx-2 text-gray-500">Or</span>
                    <span className="flex-grow border-gray-300 border-t" />
                </div>

                <Button
                    variant={"outline"}
                    className="w-full rounded-full"
                    size={"lg"}
                    aria-label="Sign in with Google"
                    disabled={registrationState.isLoading}
                    onClick={() =>
                        router.push(
                            `${getEnv("API_BASE_URL")}/auth/google-login`,
                        )
                    }
                >
                    <Google />
                    Continue with Google
                </Button>

                <p className="mt-6 text-center text-sm">
                    By creating an account, you confirm that you are 18+ and
                    agree to the{" "}
                    <Link
                        href="/terms"
                        className="font-semibold underline hover:text-gray-700"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Terms of service
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/privacy"
                        className="font-semibold underline hover:text-gray-700"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </div>
    );
}

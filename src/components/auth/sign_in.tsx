"use client";

import { handleSignIn } from "@/actions/auth";
import getEnv from "@/lib/common/env";
import type { RequestState } from "@/lib/common/types";
import { emailSchema, passwordSchema } from "@/lib/schema";
import Google from "@/svg/auth/google.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../button";
import { EmailInput, PasswordInput } from "./input";

const SignInSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

export default function SignIn() {
    const router = useRouter();
    const [loginState, setLoginState] = useState<RequestState>({
        isLoading: false,
        isSuccess: false,
        error: "",
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
    });
    const onSubmitHandler = async (data: z.infer<typeof SignInSchema>) => {
        setLoginState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        await handleSignIn(data.email, data.password).then((newState) =>
            setLoginState(newState),
        );
        if (!loginState.isSuccess) return;
        router.push("/chat");
    };
    return (
        <div className="flex min-h-dvh items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">
                <div className="mb-6 flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() =>
                            router.push("/sign-up", { scroll: false })
                        }
                        aria-label="Sign in"
                        className="font-medium text-gray-500 text-lg hover:text-gray-700"
                    >
                        Sign Up
                    </button>
                    <h1 className="font-bold text-3xl text-gray-900 ">
                        Log in
                    </h1>
                </div>

                <p className="mb-8 text-gray-700">
                    Welcome back! Please enter your details.
                </p>

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
                    <PasswordInput
                        id="password"
                        placeholder="Enter your password"
                        {...register("password")}
                        error={errors.password}
                    />

                    <div className="flex items-center justify-between">
                        <label className="flex cursor-pointer items-center text-gray-700 text-sm">
                            <input
                                type="checkbox"
                                className="size-4 appearance-none rounded border border-gray-300 accent-primary checked:appearance-auto"
                            />
                            <span className="ml-2">Remember for 30 days</span>
                        </label>
                        <button
                            type="button"
                            onClick={() =>
                                router.push("/forgot-password", {
                                    scroll: false,
                                })
                            }
                            disabled={loginState.isLoading}
                            aria-label="Forgot password"
                            className="cursor-pointer font-medium text-primary text-sm hover:underline"
                        >
                            Forgot password
                        </button>
                    </div>

                    {loginState.error && (
                        <p className="text-red-500 text-sm">
                            {loginState.error}
                        </p>
                    )}

                    <Button
                        size={"lg"}
                        className="w-full rounded-full"
                        type="submit"
                        disabled={loginState.isLoading}
                    >
                        Log in &rarr;
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
                    disabled={loginState.isLoading}
                    aria-label="Sign in with Google"
                    onClick={() =>
                        router.push(
                            `${getEnv("API_BASE_URL")}/auth/google-login`,
                        )
                    }
                >
                    <Google />
                    Continue with Google
                </Button>
            </div>
        </div>
    );
}

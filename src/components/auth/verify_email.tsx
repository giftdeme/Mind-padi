"use client";

import Checkmark from "@/svg/auth/checkmark.svg";
import Mail from "@/svg/auth/mail.svg";

import {
    handleResendVerificationEmail,
    handleVerifyEmail,
} from "@/actions/auth";
import type { RequestState } from "@/lib/common/types";
import { useEmail } from "@/lib/context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    type ChangeEvent,
    type ClipboardEvent,
    type FormEvent,
    type KeyboardEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import toast from "react-hot-toast";
import { Button } from "../button";

export default function VerifyEmail() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const isCode = searchParams.get("showInput") === "true";
    const [verificationCode, setVerificationCode] = useState<string[]>([
        "",
        "",
        "",
        "",
    ]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [verificationState, setVerificationState] = useState<RequestState>({
        isLoading: false,
        isSuccess: false,
        error: "",
    });
    const [resendVerificationEmailState, setResendVerificationEmailState] =
        useState<RequestState>({
            isLoading: false,
            isSuccess: false,
            error: "",
        });

    const MAX_CODE_LENGTH = 4;

    useEffect(() => {
        const urlCode = searchParams.get("code");
        if (!urlCode || urlCode.length !== MAX_CODE_LENGTH) return;

        setVerificationState((prev) => ({
            ...prev,
            isLoading: true,
        }));

        handleVerifyEmail(urlCode).then((newState) =>
            setVerificationState(newState),
        );
    }, [searchParams]);

    const { email } = useEmail();

    const handleShowInput = () => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("showInput", (!isCode).toString());
        router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    };

    const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value && (value < "0" || value > "9")) return;

        const newCode = [...verificationCode];
        newCode[index] = value.slice(-1);
        setVerificationCode(newCode);

        if (value && index < MAX_CODE_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        index: number,
        e: KeyboardEvent<HTMLInputElement>,
    ) => {
        if (e.key === "Backspace") {
            if (!verificationCode[index] && index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }

        if (e.key === "ArrowLeft" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }

        if (e.key === "ArrowRight" && index < MAX_CODE_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e: ClipboardEvent) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData("text");

        let pastedDigits = "";
        for (let i = 0; i < pastedText.length; i++) {
            const char = pastedText[i];
            if (char >= "0" && char <= "9") {
                pastedDigits += char;
            }
        }

        const pastedData = pastedDigits.slice(0, MAX_CODE_LENGTH);

        if (pastedData) {
            const newCode = [...verificationCode];
            for (let i = 0; i < pastedData.length; i++) {
                if (i < MAX_CODE_LENGTH) {
                    newCode[i] = pastedData[i];
                }
            }
            setVerificationCode(newCode);

            if (pastedData.length < MAX_CODE_LENGTH) {
                inputRefs.current[pastedData.length]?.focus();
            } else {
                inputRefs.current[MAX_CODE_LENGTH - 1]?.focus();
            }
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const code = verificationCode.join("");
        if (code.length !== MAX_CODE_LENGTH) {
            setVerificationState((prev) => ({
                ...prev,
                error: `Verification code must be ${MAX_CODE_LENGTH} digits`,
            }));
            return;
        }

        setVerificationState((prev) => ({
            ...prev,
            isLoading: true,
        }));

        await handleVerifyEmail(code).then((newState) =>
            setVerificationState(newState),
        );
    };

    const handleClick = async () => {
        setResendVerificationEmailState((prev) => ({
            ...prev,
            isLoading: true,
        }));

        await handleResendVerificationEmail(email).then((newState) =>
            setResendVerificationEmailState(newState),
        );

        if (!resendVerificationEmailState.isSuccess)
            toast.error(resendVerificationEmailState.error);
        toast.success("Verification email resent");
    };

    return (
        <div className="flex min-h-dvh items-center justify-center px-4 py-8">
            <div className="w-full max-w-md space-y-6">
                <div className="flex flex-col items-center justify-between space-y-6">
                    {verificationState.isSuccess ? <Checkmark /> : <Mail />}
                    <div className="space-y-3 text-center">
                        <h1 className="font-bold text-3xl text-gray-900">
                            {verificationState.isSuccess
                                ? "Email verified"
                                : "Confirm your email address"}
                        </h1>
                        <p className="text-gray-700">
                            {verificationState.isSuccess ? (
                                "Your email has been verified successfully. Click below to log in magically."
                            ) : (
                                <>
                                    We sent a email verification code to{" "}
                                    <span className="font-medium">{email}</span>
                                </>
                            )}
                        </p>
                    </div>
                </div>

                {verificationState.isSuccess ? (
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
                    <>
                        {!isCode && (
                            <Button
                                size="lg"
                                className="w-full rounded-full"
                                onClick={handleShowInput}
                                disabled={
                                    resendVerificationEmailState.isLoading
                                }
                            >
                                Enter code manually &rarr;
                            </Button>
                        )}

                        {isCode && (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                                name="code"
                            >
                                <div className="flex justify-center gap-4">
                                    {verificationCode.map((digit, index) => {
                                        const inputId = `digit-${index}`;
                                        return (
                                            <div
                                                key={inputId}
                                                className="relative h-16 w-16"
                                            >
                                                <label
                                                    className="sr-only"
                                                    htmlFor={inputId}
                                                >
                                                    Enter code
                                                </label>
                                                <input
                                                    id={inputId}
                                                    ref={(el) => {
                                                        inputRefs.current[
                                                            index
                                                        ] = el;
                                                    }}
                                                    type="text"
                                                    inputMode="numeric"
                                                    maxLength={1}
                                                    value={digit}
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                    onKeyDown={(e) =>
                                                        handleKeyDown(index, e)
                                                    }
                                                    onPaste={handlePaste}
                                                    className="h-full w-full rounded-lg border-2 border-primary text-center font-bold text-4xl text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                {verificationState.error && (
                                    <p className="text-center text-red-500 text-sm">
                                        {verificationState.error}
                                    </p>
                                )}

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full rounded-full"
                                    disabled={verificationState.isLoading}
                                >
                                    {verificationState.isLoading ? (
                                        "Verifying..."
                                    ) : (
                                        <>Verify email &rarr;</>
                                    )}
                                </Button>
                            </form>
                        )}
                        <div className="text-center text-gray-700">
                            Didn't receive the email?{" "}
                            <button
                                type="button"
                                onClick={handleClick}
                                className="cursor-pointer font-medium text-primary text-sm hover:underline"
                                disabled={
                                    verificationState.isLoading ||
                                    resendVerificationEmailState.isLoading
                                }
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
                                disabled={
                                    verificationState.isLoading ||
                                    resendVerificationEmailState.isLoading
                                }
                            >
                                &larr; Back to log in
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

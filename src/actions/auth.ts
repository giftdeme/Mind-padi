"use server";

import { RequestHandler } from "@/lib/common/request";
import type { RequestState } from "@/lib/common/types";

export async function handleSignUp(
    email: string,
    password: string,
): Promise<RequestState> {
    try {
        await RequestHandler("/auth/register", {
            method: "POST",
            body: { email, password },
        });
        return {
            isLoading: false,
            isSuccess: true,
            error: "",
        };
    } catch (err) {
        return handleError(err);
    }
}

export async function handleResendVerificationEmail(
    email: string,
): Promise<RequestState> {
    try {
        await RequestHandler("/auth/resend-verification-email", {
            method: "POST",
            body: { email },
        });
        return {
            isLoading: false,
            isSuccess: true,
            error: "",
        };
    } catch (err) {
        return handleError(err);
    }
}

export async function handleSignIn(email: string, password: string) {
    try {
        await RequestHandler("/auth/login", {
            method: "POST",
            body: { email, password },
        });
        return {
            isLoading: false,
            isSuccess: true,
            error: "",
        };
    } catch (err) {
        return handleError(err);
    }
}

export async function handleVerifyEmail(code: string): Promise<RequestState> {
    try {
        await RequestHandler("/auth/verify-email", {
            method: "POST",
            body: { code },
        });
        return {
            isLoading: false,
            isSuccess: true,
            error: "",
        };
    } catch (err) {
        return handleError(err);
    }
}

export async function handleForgotPassword(
    email: string,
): Promise<RequestState> {
    try {
        await RequestHandler("/auth/request-password-reset", {
            method: "POST",
            body: { email },
        });
        return {
            isLoading: false,
            isSuccess: true,
            error: "",
        };
    } catch (err) {
        return handleError(err);
    }
}

export async function handleVerifyPasswordResetToken(
    token: string,
): Promise<RequestState> {
    try {
        await RequestHandler("/auth/verify-password-reset-token", {
            method: "POST",
            body: { token },
        });
        return {
            isLoading: false,
            isSuccess: true,
            error: "",
        };
    } catch (err) {
        return handleError(err);
    }
}

export async function handleResetPassword(
    token: string,
    newPassword: string,
): Promise<RequestState> {
    try {
        await RequestHandler("/auth/confirm-password-reset", {
            method: "PATCH",
            body: { token, newPassword },
        });
        return {
            isLoading: false,
            isSuccess: true,
            error: "",
        };
    } catch (err) {
        return handleError(err);
    }
}

async function handleError(error: unknown): Promise<RequestState> {
    return {
        isLoading: false,
        isSuccess: false,
        error:
            error instanceof Error
                ? error.message
                : "An unknown error occurred. Please try again.",
    };
}

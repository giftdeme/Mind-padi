import { z } from "zod";

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 128;
const MAX_EMAIL_LENGTH = 320;

export const emailSchema = z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .max(MAX_EMAIL_LENGTH, {
        message: `Email must be at most ${MAX_EMAIL_LENGTH} characters long`,
    });

export const passwordSchema = z
    .string()
    .min(MIN_PASSWORD_LENGTH, {
        message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`,
    })
    .max(MAX_PASSWORD_LENGTH, {
        message: `Password must be at most ${MAX_PASSWORD_LENGTH} characters long`,
    })
    .refine((val) => [...val].every((c) => c.charCodeAt(0) <= 127), {
        message: "Password must contain only ASCII characters",
    })
    .refine((val) => [...val].some((c) => c >= "A" && c <= "Z"), {
        message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => [...val].some((c) => c >= "a" && c <= "z"), {
        message: "Password must contain at least one lowercase letter",
    })
    .refine((val) => [...val].some((c) => c >= "0" && c <= "9"), {
        message: "Password must contain at least one digit",
    })
    .refine(
        (val) =>
            [...val].some(
                (c) =>
                    !(
                        (c >= "A" && c <= "Z") ||
                        (c >= "a" && c <= "z") ||
                        (c >= "0" && c <= "9")
                    ),
            ),
        {
            message: "Password must contain at least one special character",
        },
    );

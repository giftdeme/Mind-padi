import Eye from "@/svg/auth/eye.svg";
import EyeSlash from "@/svg/auth/eye_slash.svg";
import { type InputHTMLAttributes, type ReactNode, useState } from "react";
import type { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
    error?: FieldError;
}

export function EmailInput({ label = "Email", error, ...props }: InputProps) {
    return (
        <div>
            <label
                htmlFor={props.id || "email"}
                className="mb-1 block font-medium text-gray-700 text-sm"
            >
                {label}
            </label>
            <input
                type="email"
                className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                {...props}
            />
            {error && (
                <p className="mt-2 text-red-500 text-sm">{error.message}</p>
            )}
        </div>
    );
}

export function PasswordInput({
    label = "Password",
    error,
    ...props
}: InputProps) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <label
                htmlFor={props.id || "password"}
                className="mb-1 block font-medium text-gray-700 text-sm"
            >
                {label}
            </label>
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    {...props}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="-translate-y-1/2 absolute top-1/2 right-3 transform text-gray-500"
                    tabIndex={-1}
                >
                    {showPassword ? <EyeSlash /> : <Eye />}
                </button>
            </div>
            {error && (
                <p className="mt-2 text-red-500 text-sm">{error.message}</p>
            )}
        </div>
    );
}

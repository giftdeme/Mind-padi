import AuthHero from "@/components/auth/auth_hero";
import ForgotPassword from "@/components/auth/forgot_password";
import ResetPassword from "@/components/auth/reset_password";
import SignIn from "@/components/auth/sign_in";
import SignUp from "@/components/auth/sign_up";
import VerifyEmail from "@/components/auth/verify_email";
import { EmailProvider } from "@/lib/context";
import { Toaster } from "react-hot-toast";

export default async function Auth({
    params,
}: { params: Promise<{ auth: string }> }) {
    const { auth } = await params;

    return (
        <div className="mx-auto max-w-screen-2xl px-6">
            <div className="flex items-center justify-center md:justify-between">
                <Toaster />
                <AuthHero />
                <EmailProvider>
                    <div className="w-full md:w-1/2">
                        {auth === "sign-up" ? (
                            <SignUp />
                        ) : auth === "sign-in" ? (
                            <SignIn />
                        ) : auth === "forgot-password" ? (
                            <ForgotPassword />
                        ) : auth === "reset-password" ? (
                            <ResetPassword />
                        ) : auth === "verify-email" ? (
                            <VerifyEmail />
                        ) : (
                            <SignUp />
                        )}
                    </div>
                </EmailProvider>
            </div>
            <div className="sticky bottom-0 py-8 text-right text-gray-500 text-xs">
                &copy; MindPadi AI {new Date().getFullYear()}
            </div>
        </div>
    );
}

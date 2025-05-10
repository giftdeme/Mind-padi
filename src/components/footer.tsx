import Instagram from "@/svg/footer/instagram.svg";
import LinkedIn from "@/svg/footer/linkedin.svg";
import Logo from "@/svg/footer/logo.svg";
import X from "@/svg/footer/x.svg";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="bg-primary px-4 py-12 text-white md:py-16"
            id="contact"
        >
            <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
                <div className="flex flex-col items-center space-y-4 md:items-start">
                    <Logo />
                    <p className="mt-2 text-sm">
                        &copy; Mindpadi AI Inc. All Rights Reserved.
                    </p>
                </div>

                <div>
                    <p className="mb-4 text-sm">Find Us On Social Media :</p>
                    <div className="flex justify-center gap-6">
                        <Link
                            href="https://instagram.com/mindpadi"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/mindpadi"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedIn />
                        </Link>
                        <Link
                            href="https://x.com/mindpadi"
                            aria-label="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <X />
                        </Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="font-semibold text-lg">
                        We're always happy to help
                    </p>
                    <Link
                        href="mailto:admin@mindpadi.com"
                        className="mt-2 block text-sm underline-offset-4 hover:underline md:text-end"
                    >
                        admin&#64;mindpadi.com
                    </Link>
                </div>
            </div>
        </footer>
    );
}

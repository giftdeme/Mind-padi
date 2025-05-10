"use client";

import Close from "@/svg/navbar/close.svg";
import Logo from "@/svg/navbar/logo.svg";
import Menu from "@/svg/navbar/menu.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./button";

const NAVLINKS = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact Us", href: "#contact" },
] as const;

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <nav className="sticky top-0 z-50 mx-1 max-w-7xl rounded-3xl bg-[#F4F4F4] px-4 py-4 shadow-xs lg:mx-auto">
    <div className="flex items-center   gap-20">
        {/* Left: Logo */}
        <Link href="/" aria-label="Home" className="flex-shrink-0">
            <Logo />
        </Link>

        {/* Center: Nav Links */}
        <ul className="hidden lg:flex lg:space-x-4">
            {NAVLINKS.map((link) => (
                <li key={link.name}>
                    <Link
                        href={link.href}
                        className="transition-colors hover:text-primary/90"
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>

        {/* Right: Button */}
        <div className="hidden lg:block flex-shrink-0 ml-4">
            <Button
                className="rounded-3xl"
                onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                }}
                aria-label="Start Chat"
            >
                Start Chat &rarr;
            </Button>
        </div>

        {/* Mobile: Hamburger */}
        <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            aria-label="Toggle Menu"
        >
            {menuOpen ? <Close /> : <Menu />}
        </button>
    </div>

    {/* Mobile Menu */}
    <div className={`${menuOpen ? "block" : "hidden"} mt-4 lg:hidden`}>
        <ul className="flex flex-col space-y-6">
            {NAVLINKS.map((link) => (
                <li key={link.name}>
                    <Button
                        asChild
                        variant={"link"}
                        onClick={() => setMenuOpen(false)}
                        className="block p-0 text-foreground hover:no-underline"
                        size={"sm"}
                        aria-label={link.name}
                    >
                        <Link href={link.href}>{link.name}</Link>
                    </Button>
                </li>
            ))}
            <li>
                <Button
                    className="block rounded-3xl"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/");
                    }}
                    aria-label="Start Chat"
                >
                    Start Chat &rarr;
                </Button>
            </li>
        </ul>
    </div>
</nav>



    );
}

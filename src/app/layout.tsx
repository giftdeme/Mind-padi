import { generalSans } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "MindPadi - Your mental health companion",
    description: "I am your mind padi",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${generalSans.variable} scroll-smooth antialiased`}
            >
                {children}
            </body>
        </html>
    );
}

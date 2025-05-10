import localFont from "next/font/local";

export const generalSans = localFont({
    src: [
        {
            path: "../../public/font/light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/font/light_italic.woff2",
            weight: "300",
            style: "italic",
        },
        {
            path: "../../public/font/regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/font/medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/font/medium_italic.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "../../public/font/semibold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/font/semibold_italic.woff2",
            weight: "600",
            style: "italic",
        },
        {
            path: "../../public/font/bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/font/bold_italic.woff2",
            weight: "700",
            style: "italic",
        },
    ],
    variable: "--font-general-sans",
});

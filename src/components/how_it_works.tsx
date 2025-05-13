"use client";
import Overlay from "@/png/how-it-works/overlay.png";
import CheckMark from "@/svg/how-it-works/check_mark.svg";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./customButton";

export default function HowItWorks() {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <section className="px-4 py-12 lg:py-24" id="how-it-works">
            <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between lg:flex-row">
                <div className="max-w-xl font-medium">
                    <span className="inline-block rounded-full border border-[#0A5C35] px-3 py-1 text-sm">
                        How it works
                    </span>

                    <h2 className="mt-4 text-2xl text-gray-900 sm:text-3xl lg:text-4xl">
                        Connect with our{" "}
                        <span className="text-green-500 italic">
                            empathetic
                        </span>
                        <br className="hidden lg:block" /> AI chatbot
                    </h2>

                    <p className="mt-4 font-normal text-gray-700">
                        Express yourself freely with confidential conversations,
                        guided journaling, and thoughtful responses to help find
                        clarity
                    </p>

                    <ul className="mt-6 space-y-5 font-normal">
                        <li className="flex items-center">
                            <div className="rounded-full bg-[#EAFFE5] p-1">
                                <CheckMark />
                            </div>
                            <span className="ml-2 text-gray-800">
                                Sign Up / Log In
                            </span>
                        </li>
                        <li className="flex items-center">
                            <div className="rounded-full bg-[#EAFFE5] p-1">
                                <CheckMark />
                            </div>
                            <span className="ml-2 text-gray-800">
                                Set Up & Personalization
                            </span>
                        </li>
                        <li className="flex items-center">
                            <div className="rounded-full bg-[#EAFFE5] p-1">
                                <CheckMark />
                            </div>
                            <span className="ml-2 text-gray-800">
                                Start a Conversation
                            </span>
                        </li>
                        <li className="flex items-center">
                            <div className="rounded-full bg-[#EAFFE5] p-1">
                                <CheckMark />
                            </div>
                            <span className="ml-2 text-gray-800">
                                Track your mood
                            </span>
                        </li>
                        <li className="flex items-center">
                            <div className="rounded-full bg-[#EAFFE5] p-1">
                                <CheckMark />
                            </div>
                            <span className="ml-2 text-gray-800">
                                Self-Care & Wellness Activities
                            </span>
                        </li>
                    </ul>

                    {/* <Button
                        className="mt-8 h-12 w-32 rounded-3xl"
                        aria-label="Start Chat"
                    >
                        Start Chat &rarr;
                    </Button> */}

                    <CustomButton
                        isActive={isActive}
                        // onClick={handleClick}  // Pass the handleClick function here
                        ariaLabel="Start Chat &rarr;"
                        size={"lg"}
                        className="mt-8 h-12 w-32 rounded-3xl"
                    />
                </div>

                <div className="mt-12 lg:mt-6">
                    <Image
                        src={Overlay}
                        width={672}
                        height={703}
                        className="pointer-events-none hidden w-[35dvw] select-none lg:block"
                        priority
                        quality={100}
                        alt="Overlay"
                    />
                    <Image
                        src={Overlay}
                        width={420}
                        height={439}
                        className="pointer-events-none select-none md:hidden"
                        priority
                        quality={100}
                        alt="Overlay"
                    />
                </div>
            </div>
        </section>
    );
}

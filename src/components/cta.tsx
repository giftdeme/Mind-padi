"use client"
import Image from "next/image";
import { Button } from "./button";
import Overlay from "@/png/cta/overlay.png";
import CustomButton from "./customButton";
import { useState } from "react";

export default function CTA() {
        const [isActive, setIsActive] = useState<boolean>(false);
    
    return (
        <section className="relative">
            {/* <div className="-z-10 absolute  inset-0 bg-[url(/png/cta/overlay.png)] bg-center bg-cover bg-no-repeat" />
            <div className="-z-10 absolute inset-0 bg-[url(/png/cta/overlay_small.png)] bg-center bg-cover bg-no-repeat " /> */}
              <Image
                src={Overlay}
                alt="Overlay"
                fill
                className="object-cover object-center -z-10"
                priority
                quality={100}
            />
            <div className="flex flex-col items-center justify-center px-4 py-16 md:py-24">
                <h2 className="mb-8 text-center font-medium text-2xl leading-snug sm:text-3xl lg:text-4xl">
                    Get Help From Our Empathetic <br /> AI Chatbot
                </h2>

                    {/* <Button className="rounded-3xl" aria-label="Start Chat">
                        Start Chat For Free &rarr;
                    </Button> */}

                <CustomButton
                                isActive={isActive}
                                // onClick={handleClick}  // Pass the handleClick function here
                                ariaLabel="Start Chat For Free &rarr;"
                                size="lg"
                                className="custom-class"
                            />

                
            </div>
        </section>
    );
}

import ChatBubbleOne from "@/png/hero/chat_bubble_1.png";
import ChatBubbleTwo from "@/png/hero/chat_bubble_2.png";
import ChatBubbleThree from "@/png/hero/chat_bubble_3.png";
import ChatBubbleFour from "@/png/hero/chat_bubble_4.png";
import Overlay from "@/png/hero/overlay.png";
import OverlaySmall from "@/png/hero/overlay_small.png";
import Love from "@/svg/hero/love.svg";
import Tick from "@/svg/hero/tick.svg";
import TickSmall from "@/svg/hero/tick_small.svg";
import Image from "next/image";
import { Button } from "./button";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative mx-auto flex min-h-dvh max-w-screen-xl flex-col items-center justify-center overflow-hidden py-12 lg:py-24">
            <div className="mx-auto mb-12 max-w-3xl px-2 text-center sm:px-0">
                <h1 className="mb-4 font-bold text-4xl md:text-5xl lg:text-6xl">
                    <span className="font-light text-green-500 italic">
                        Ease
                    </span>{" "}
                    <span className="text-primary">your mind,</span>
                    <br />
                    <span className="text-primary">One chat at a time</span>
                </h1>
                <p className="mx-auto mb-8 max-w-md text-gray-600 text-sm sm:text-lg">
                    24/7 Support, Professional Guidance, Complete Privacy. Chat
                    anytime to reduce stress and build resilience with your
                    personal mental wellness partner
                </p>
                <Button
                    size={"lg"}
                    className="w-44 rounded-2xl"
                    aria-label="Start Chat"
                >
                    Start Chat &rarr;
                </Button>
            </div>

            {/* Desktop */}
            <div className="relative hidden flex-col lg:flex">
                <Image
                    src={Overlay}
                    width={914}
                    height={704}
                    className="pointer-events-none h-full w-full select-none"
                    priority
                    quality={100}
                    alt="Overlay"
                />

               {/* Chat Bubble 1 */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 3, duration: 0.5 }}
  className="absolute right-[10%] bottom-[28%] transform cursor-pointer"
>
  <Image
    src={ChatBubbleOne}
    width={334}
    height={39}
    className="pointer-events-none h-auto w-auto select-none"
    priority
    quality={100}
    alt="Chat Bubble One"
  />
</motion.div>
                <div className="absolute right-[2%] bottom-[12.5%] transform cursor-pointer transition-transform hover:scale-105">
                    <Image
                        src={ChatBubbleTwo}
                        width={334}
                        height={39}
                        className="pointer-events-none h-auto w-auto select-none"
                        priority
                        quality={100}
                        alt="Chat Bubble Two"
                    />
                </div>

                <div className="absolute right-[20%] bottom-4 transform cursor-pointer transition-transform hover:scale-105">
                    <Image
                        src={ChatBubbleThree}
                        width={241}
                        height={58}
                        className="pointer-events-none h-auto w-auto select-none"
                        priority
                        quality={100}
                        alt="Chat Bubble Three"
                    />
                </div>

                <div className="absolute bottom-[10%] left-[-12.5%] transform cursor-pointer transition-transform hover:scale-105">
                    <Image
                        src={ChatBubbleFour}
                        width={201}
                        height={104}
                        className="pointer-events-none h-auto w-auto select-none"
                        priority
                        quality={100}
                        alt="Chat Bubble Four"
                    />
                </div>

                <Tick className="-right-16 -bottom-10 absolute" />
                <Love className="absolute top-11 left-[-9.09%] hidden translate-x-[-9.09%] lg:block" />
            </div>

            {/* Mobile */}
            <div className="relative flex w-[94dvw] flex-col place-self-start lg:hidden">
                <Image
                    src={OverlaySmall}
                    width={472}
                    height={364}
                    className="pointer-events-none h-full w-full select-none"
                    priority
                    quality={100}
                    alt="Overlay Small"
                />

                <div className="absolute right-[8.33%] bottom-[28%]">
                    <Image
                        src={ChatBubbleOne}
                        width={172}
                        height={30}
                        className="pointer-events-none h-auto w-auto select-none"
                        priority
                        quality={100}
                        alt="Chat Bubble One"
                    />
                </div>

                <div className="absolute right-0 bottom-[16.67%]">
                    <Image
                        src={ChatBubbleTwo}
                        width={172}
                        height={20}
                        className="pointer-events-none h-auto w-auto select-none"
                        priority
                        quality={100}
                        alt="Chat Bubble Two"
                    />
                </div>

                <div className="absolute right-[24%] bottom-4">
                    <Image
                        src={ChatBubbleThree}
                        width={116}
                        height={28}
                        className="pointer-events-none h-auto w-auto select-none"
                        priority
                        quality={100}
                        alt="Chat Bubble Three"
                    />
                </div>

                <TickSmall className="absolute right-0 bottom-0 translate-x-6 translate-y-6" />
            </div>
        </section>
    );
}

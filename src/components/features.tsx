import OverlayOne from "@/png/features/overlay_1.png";
import OverlayTwo from "@/png/features/overlay_2.png";
import BarChart from "@/svg/features/bar_chart.svg";
import Lightbulb from "@/svg/features/lightbulb.svg";
import MessageCircle from "@/svg/features/message_circle.svg";
import Smile from "@/svg/features/smile.svg";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
    return (
        <section className="bg-[#F2F2FD] px-4 py-12 md:py-24" id="features">
            <div className="mx-auto max-w-screen-xl">
                <div className="font-medium md:place-self-center lg:place-self-start">
                    <span className="rounded-full bg-[#E9E1FF] px-3 py-1 text-sm md:bg-green-800 md:text-white">
                        Our Features
                    </span>
                    <h2 className="mt-4 text-2xl leading-snug md:mt-8 md:text-4xl">
                        Our AI-powered chatbot provides personalized{" "}
                        <br className="hidden md:block" /> mental wellness
                        support through{" "}
                        <span className="font-normal text-green-500 italic">
                            confidential <br className="hidden md:block" />{" "}
                            conversations
                        </span>{" "}
                        whenever you need it.
                    </h2>
                </div>

                <div className="mt-14 grid md:mt-20 md:grid-cols-2 md:gap-8">
                    <div className="flex flex-col space-y-6 md:space-y-8">
                        <div className="relative order-2 mt-6 flex-1 transform cursor-pointer overflow-hidden transition-transform hover:scale-105 md:order-1 md:mt-0">
                            <Image
                                src={OverlayOne}
                                width={592}
                                height={639}
                                className="pointer-events-none hidden h-full w-full select-none rounded-3xl md:block"
                                priority
                                quality={100}
                                alt="Overlay One"
                            />
                            <Image
                                src={OverlayOne}
                                width={407}
                                height={437}
                                className="pointer-events-none h-full w-full select-none rounded-2xl object-contain md:hidden"
                                priority
                                quality={100}
                                alt="Overlay One"
                            />
                            <div className="absolute right-0 bottom-0 left-0 space-y-5 p-6">
                                <MessageCircle />
                                <h3 className="font-semibold text-lg text-white">
                                    24/7 Compassionate Support
                                </h3>
                                <p className="max-w-md text-gray-300 text-sm">
                                    Your personal mental wellness companion
                                    available anytime, offering judgment-free
                                    conversations when you need them most.
                                </p>
                                <Link
                                    href="#"
                                    className="inline-block font-medium text-green-500"
                                >
                                    Chat with Mindpadi &rarr;
                                </Link>
                            </div>
                        </div>

                        <div className="order-1 transform cursor-pointer space-y-5 rounded-2xl bg-background p-6 shadow-sm transition-transform hover:scale-105 md:order-2 md:rounded-3xl">
                            <Smile />
                            <h3 className="font-semibold text-lg">
                                Private Space for Self-Expression
                            </h3>
                            <p className="max-w-md text-gray-600 text-sm">
                                Express yourself freely with confidential
                                conversations, guided journaling, and thoughtful
                                responses to help find clarity.
                            </p>
                            <Link
                                href="#"
                                className="inline-block font-medium text-[#2C2CEC]"
                            >
                                Share privately &rarr;
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6 md:space-y-8">
                        <div className="transform cursor-pointer space-y-5 rounded-2xl bg-background p-6 shadow-sm transition-transform hover:scale-105 md:rounded-3xl">
                            <Lightbulb />
                            <h3 className="font-semibold text-lg">
                                Personalized Guidance that Adapts
                            </h3>
                            <p className="max-w-md text-gray-600 text-sm">
                                Science-backed strategies, mindfulness
                                techniques, and emotional insights tailored to
                                your unique mental wellness journey.
                            </p>
                            <Link
                                href="#"
                                className="inline-block font-medium text-[#2C2CEC]"
                            >
                                Get personalized help &rarr;
                            </Link>
                        </div>

                        <div className="relative flex-1 transform cursor-pointer overflow-hidden transition-transform hover:scale-105">
                            <Image
                                src={OverlayTwo}
                                width={592}
                                height={639}
                                className="pointer-events-none hidden h-full w-full select-none rounded-3xl md:block"
                                priority
                                quality={100}
                                alt="Overlay Two"
                            />
                            <Image
                                src={OverlayTwo}
                                width={407}
                                height={439}
                                className="pointer-events-none h-full w-full select-none rounded-2xl md:hidden"
                                priority
                                quality={100}
                                alt="Overlay Two"
                            />
                            <div className="absolute right-0 bottom-0 left-0 space-y-5 p-6">
                                <BarChart />
                                <h3 className="font-semibold text-lg text-white">
                                    Daily Wellness Check-ins
                                </h3>
                                <p className="max-w-md text-gray-300 text-sm">
                                    Track your emotional well-being with mood
                                    monitoring, progress visualization, and
                                    gentle reminders to prioritize mental
                                    health.
                                </p>
                                <Link
                                    href="#"
                                    className="inline-block font-medium text-green-500"
                                >
                                    Track your progress &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import ChevronLeft from "@/svg/testimonial/chevron_left.svg";
import ChevronRight from "@/svg/testimonial/chevron_right.svg";
import Quote from "@/svg/testimonial/quote.svg";
import Rating from "@/svg/testimonial/rating.svg";
import Image from "next/image";
import { useState } from "react";

const TESTIMONIALS = [
    {
        id: 1,
        text: "As someone who couldn't afford traditional therapy, MindPadi has been a lifeline. The daily check-ins keep me accountable for my mental health.",
        image: "/png/testimonial/passport_1.png",
        rating: 5,
    },
    {
        id: 2,
        text: "MindPadi has transformed my outlook. The empathetic AI makes self-reflection engaging and supportive.",
        image: "/png/testimonial/passport_1.png",
        rating: 5,
    },
    {
        id: 3,
        text: "With daily mood tracking and personalized tips, I feel more balanced and understood than ever before.",
        image: "/png/testimonial/passport_1.png",
        rating: 5,
    },
] as const;

export default function Testimonial() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(
            (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
        );
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const minSwipeDistance = 50;
    let startX = 0;

    const handleTouchStart = (e: React.TouchEvent) => {
        startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        if (Math.abs(deltaX) < minSwipeDistance) return;
        deltaX > 0 ? nextSlide() : prevSlide();
    };

    return (
        <section
            className="bg-primary"
            id="testimonial"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="relative mx-auto max-w-screen-xl px-4 py-12 text-white md:px-20 md:py-24">
                <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
                    <div className="space-y-8 md:max-w-lg">
                        <Quote />
                        <Rating />
                        <p className="max-w-md font-medium text-lg leading-relaxed">
                            {TESTIMONIALS[current].text}
                        </p>
                    </div>

                    <div className="mt-6 flex justify-center space-x-2 md:hidden">
                        {TESTIMONIALS.map((item, index) => (
                            <div
                                key={item.id}
                                className={`h-2 rounded-full transition-all ${
                                    current === index
                                        ? "w-4 bg-background"
                                        : "w-2 bg-background/40"
                                }`}
                            />
                        ))}
                    </div>

                    <div className="relative">
                        <div className="-left-4 absolute top-4 h-full w-2/3 rounded-md rounded-bl-none bg-background/10 backdrop-blur-xs" />
                        <div className="relative z-10 transform cursor-pointer overflow-hidden rounded-2xl rounded-bl-none transition-transform hover:scale-105">
                            <Image
                                src={TESTIMONIALS[current].image}
                                width={320}
                                height={463}
                                priority
                                quality={100}
                                className="pointer-events-none h-full w-full select-none"
                                alt="Testimonial"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous"
                    className="absolute inset-y-0 left-0 hidden items-center md:flex"
                >
                    <ChevronLeft />
                </button>

                <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next"
                    className="absolute inset-y-0 right-0 hidden items-center md:flex"
                >
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
}

"use client";

import ChevronDown from "@/svg/faqs/chevron_down.svg";
import ChevronUp from "@/svg/faqs/chevron_up.svg";
import { useState } from "react";
import { Button } from "./button";

const FAQS = [
    {
        id: 1,
        question: "Is MindPadi a replacement for therapy?",
        answer: "MindPadi is designed as a supportive tool for everyday mental wellness, but it's not a replacement for professional mental health treatment. We recommend using MindPadi alongside professional care when needed. Our AI can help with daily stressors, mood tracking, and coping strategies, but serious mental health concerns should be addressed by licensed professionals.",
    },
    {
        id: 2,
        question: "How is my data protected?",
        answer: "We take your privacy seriously. MindPadi uses advanced encryption and security measures to protect your data. All conversations are confidential and not shared with third parties. We adhere to strict data protection regulations to ensure your information remains safe and private.",
    },
    {
        id: 3,
        question: "What if I'm experiencing a crisis?",
        answer: "If you are in crisis or need immediate help, please reach out to a mental health professional or a crisis hotline in your area. MindPadi is not equipped to handle emergencies. We encourage users to seek professional help if they are experiencing severe distress or suicidal thoughts.",
    },
    {
        id: 4,
        question: "How much does MindPadi cost?",
        answer: "MindPadi offers a free trial period for new users. After the trial, we have various subscription plans to suit different needs. You can choose a monthly or annual plan, and we also offer discounts for students and low-income individuals. Please check our pricing page for more details.",
    },
] as const;

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section
            className="mx-auto max-w-3xl px-4 py-16 text-center md:py-24 lg:py-32"
            id="faqs"
        >
            <h2 className="font-semibold text-3xl text-gray-900 md:text-4xl">
                Frequently asked <br className="md:hidden" /> questions
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-gray-500 md:text-lg">
                Need help? This are the Common Questions About Your Mental
                Wellness Companion
            </p>

            <div className="mt-12 space-y-6 text-left">
                {FAQS.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={faq.id}
                            className="border-gray-200 border-b pb-6"
                        >
                            <button
                                type="button"
                                disabled={!faq.answer}
                                className="flex w-full items-center justify-between text-left"
                                onClick={() => toggle(index)}
                                aria-label="Toggle FAQ"
                            >
                                <span className="font-medium text-gray-900 text-lg">
                                    {faq.question}
                                </span>
                                {isOpen ? <ChevronUp /> : <ChevronDown />}
                            </button>

                            {isOpen && faq.answer && (
                                <p className="mt-4 text-base text-gray-500 leading-relaxed">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>

            <Button className="mt-12 rounded-full" aria-label="See all FAQs">
                See all FAQ's &rarr;
            </Button>
        </section>
    );
}

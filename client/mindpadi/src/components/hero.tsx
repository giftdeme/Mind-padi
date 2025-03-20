
// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import toast from "react-hot-toast";

// export default function Hero() {
// 	const [email, setEmail] = useState<string>();
// 	const [pending, setPending] = useState<boolean>(false);
// 	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEmail(e.target.value);
// 	};
// 	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		setPending(true);
// 		try {
// 			const response = await fetch("/api/submit", {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify({ email }),
// 			});
// 			if (response.ok) {
// 				setEmail("");
// 				toast.success("Thank you for joining our waitlist! 🚀");
// 			} else if (response.status === 409) {
// 				setEmail("");
// 				toast.error("You're already on the waitlist!");
// 			} else {
// 				toast.error("Oops! Something went wrong!");
// 			}
// 			setPending(false);
// 		} catch (err) {
// 			console.error(err);
// 		}
// 	};
// 	return (
// 		<section className="py-12 md:py-20 mb-28">
// 			<div className="max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between font-[family-name:var(--font-sf-ui-text)]">
// 				<div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
// 					<h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tight font-[family-name:var(--font-manrope)]">
// 						Ease Your Mind, <br />
// 						<span className="block text-4xl md:text-5xl font-semibold mt-2 md:mt-3">
// 							One Chat, At a Time
// 						</span>
// 					</h1>
// 					<p className="text-[#374151]  text-lg md:text-xl mb-8 leading-relaxed">
// 						A mental health chatbot developed with insights from{" "}
// 						<br className="hidden md:block" />
// 						science-based mental health experts, offering you{" "}
// 						<br className="hidden md:block" />
// 						personalized support every step of the way
// 						<br className="hidden md:block" />
// 						emotional support 
// 					</p>
// 					<form
// 						className="flex flex-col sm:flex-row items-start sm:items-center gap-3 max-w-md"
// 						onSubmit={handleSubmit}
// 						method="post"
// 					>
// 						<label className="sr-only" htmlFor="email-address">
// 							Email address
// 						</label>
// 						<input
// 							id="email-address"
// 							name="email"
// 							type="email"
// 							pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
// 							placeholder="Enter your email"
// 							aria-label="Your email address"
// 							autoComplete="email"
// 							spellCheck={false}
// 							autoCorrect="off"
// 							autoCapitalize="none"
// 							value={email}
// 							onChange={handleEmailChange}
// 							required
// 							className="flex-1 px-4 py-3 bg-[#1A1A1A] text-white rounded-2xl 
//                          focus:outline-none placeholder:text-[#cccccc] w-full sm:w-auto focus:invalid:border-red-400 focus:invalid:text-red-500 focus:invalid:ring-red-500 appearance-none"
// 						/>
// 						<button
// 							type="submit"
// 							disabled={pending}
// 							className="px-4 py-3 font-semibold text-white rounded-2xl bg-[#2C2CEC] 
//                          hover:bg-[#2929D6] transition-colors w-full sm:w-auto disabled:cursor-progress"
// 						>
// 							{pending ? "Submitting..." : "Join Waitlist"}
// 						</button>
// 					</form>
// 				</div>
// 				<div className="relative md:w-1/2 flex items-center justify-center">
// 					<Image
// 						src="/assets/hero.svg"
// 						alt="Person feeling overwhelmed"
// 						width={500}
// 						height={363}
// 						priority
// 						draggable={false}
// 						className="hover:scale-105 transition-transform w-[500px] h-[363px]"
// 					/>
// 					<div
// 						className="absolute bg-[#F8F4F1] text-[#1A1A1A] rounded-xl p-4 shadow-lg
//                        max-w-sm -bottom-12 md:-bottom-12 md:right-6 hover:scale-105 transition-transform cursor-pointer"
// 					>
// 						<div className="flex flex-row items-start gap-3">
// 							<Image
// 								src="/assets/avatar.svg"
// 								alt="User Avatar"
// 								width={48}
// 								height={48}
// 								priority
// 								draggable={false}
// 								className="rounded-full bg-[#a5dff9] flex-shrink-0 w-12 h-12"
// 							/>
// 							<p className="text-sm leading-snug text-[#1A1A1A]">
// 								Hi, I&apos;m feeling really overwhelmed lately. I&apos;ve been
// 								juggling work, family, and personal goals, and it&apos;s all too
// 								much!!!
// 							</p>
// 						</div>
// 					</div>
// 					<div
// 						className="absolute bg-[#F8F4F1] text-[#1A1A1A] rounded-xl px-6 py-4
//                        shadow-lg max-w-xs -bottom-32 left-1/2 transform -translate-x-1/2 hover:scale-105 transition-transform cursor-pointer"
// 					>
// 						<div className="flex flex-row items-center gap-3">
// 							<Image
// 								src="/assets/star.svg"
// 								alt="star icon"
// 								width={24}
// 								height={24}
// 								draggable={false}
// 								priority
// 								className="w-6 h-6"
// 							/>
// 							<p className="text-sm text-nowrap">Launching soon ..</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

import Image from "next/image";
import Link from "next/link";
import userIcon from "../assets/Red hair.png"; // Replace with actual path
import heroImage from "../assets/excited african american.png"; // Replace with actual path


export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 max-w-screen-2xl mx-auto">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        {/* Active Users Badge */}
        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <Image src={userIcon} alt="Active Users" width={24} height={24} />
          <span>Active Users</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
          Find Comfort, One <br /> Conversation at a Time
        </h1>

        {/* Description */}
        <p className="text-gray-600 mt-4">
          Chat Anytime, Anywhere. MindPadi Helps You Navigate Emotions, Reduce Stress, 
          And Build Mental Resilience.
        </p>

        {/* CTA Button */}
        <Link href="#">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold flex items-center gap-3 hover:bg-blue-700 transition">
            Start Chatting
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0">
        <Image 
          src={heroImage} 
          alt="Happy Woman" 
          width={400} 
          height={400} 
          className="rounded-lg"
        />
      </div>
    </section>
  );
}


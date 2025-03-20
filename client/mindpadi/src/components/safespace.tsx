import Image from "next/image";
import chatImage from "../assets/space.png"; // Update with actual path
import emotionWidget from "../assets/emotion -widget.png"; // Update with actual path

export default function SafeSpace() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 max-w-screen-2xl mx-auto space-y-12 md:space-y-0">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-indigo-600 font-semibold uppercase text-sm tracking-wider">
          Talk Freely. Heal Gently.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
          A Safe Space To Express Yourself
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
          Your mental well-being matters. Talk openly, journal your thoughts, and 
          receive thoughtful responses to help you find clarity.
        </p>
        <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
          TRY IT NOW
        </button>
      </div>

      {/* Right Content - Images & UI Elements */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        {/* Main Chat Image */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          <Image
            src={chatImage}
            alt="Chat space illustration"
            width={400}
            height={300}
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Emotion Widget - Positioned Over Main Image */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 md:left-6 md:-bottom-8 w-56 sm:w-64 bg-green-500 rounded-lg p-4 shadow-lg">
          <p className="text-white text-sm font-medium text-center">
            Start by selecting your emotion level
          </p>
          <Image 
            src={emotionWidget} 
            alt="Emotion level selection"
            width={200} 
            height={60}
            className="mt-2 mx-auto"
          />
          <button className="mt-3 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold py-2 px-4 rounded-lg transition w-full">
            LET'S CHAT NOW
          </button>
        </div>
      </div>

    </section>
  );
}

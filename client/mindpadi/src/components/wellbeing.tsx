import Image from 'next/image';
import frame2 from "../assets/image 2.png";

export default function WellBeingChat() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-6 sm:px-12 md:px-16 py-12 max-w-screen-2xl mx-auto rounded-lg shadow-lg">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Your Well-Being, One Chat Away
        </h1>
        <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
          Whether you're feeling stressed, anxious, or just need someone to listen, 
          MindPad is here for you 24/7.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
          Chat Now
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 relative">
        <div className="relative w-40 sm:w-56 md:w-64">
          <Image 
            src={frame2} 
            alt="Happy person" 
            width={300} 
            height={300} 
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-3 left-3 w-4 h-4 bg-blue-600 rounded-full"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 bg-white border border-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}

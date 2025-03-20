import Image from 'next/image';
import stock from "../assets/stock.png";
import group from "../assets/Group.png";

export default function Guidance() {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-screen-xl mx-auto">
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-sm text-blue-500 uppercase font-semibold">
          Personalized Guidance, Anytime
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Support That Understands You
        </h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          MindPadi adapts to your needs, offering mindful exercises, coping strategies, and daily affirmations to keep you grounded.
        </p>
        <ul className="text-gray-600 list-none space-y-2 mb-6 text-sm md:text-base">
          <li>✅ AI-powered emotional insights</li>
          <li>✅ Mindfulness & breathing techniques</li>
          <li>✅ Judgment-Free Conversations</li>
          <li>✅ Science-Backed Guidance</li>
          <li>✅ Guided self-reflection</li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="relative w-[250px] sm:w-[300px] md:w-[350px]">
          <Image 
            src={stock} 
            alt="Business analysis" 
            width={350} 
            height={350} 
            className="rounded-lg w-full"
          />
        </div>

        {/* Floating Info Box */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white p-3 sm:p-4 shadow-md rounded-lg flex flex-col items-center w-24 sm:w-28">
          <p className="text-gray-900 text-base sm:text-lg font-bold">5,987.34</p>
          <div className="w-24 sm:w-28 h-12 sm:h-14 bg-gray-100 rounded-md flex items-center justify-center">
            <Image 
              src={group} 
              alt="Chart visualization" 
              width={60} 
              height={40} 
            />
          </div>
        </div>
      </div>

    </div>
  );
}

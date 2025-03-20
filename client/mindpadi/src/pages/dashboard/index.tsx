'use client';

import "@/app/globals.css";
import { useState } from 'react';
import { RiHomeLine } from "react-icons/ri";
import { BsBarChartLine } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "../../assets/logo.png";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState('home');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col items-center py-6 space-y-6">
        <Image src={logo} alt="MindPadi" width={50} height={50} className="mb-4" />
        <RiHomeLine 
          className={`text-2xl cursor-pointer ${selected === 'home' ? 'opacity-75' : 'opacity-100'}`} 
          onClick={() => setSelected('home')} 
        />
        <BsBarChartLine
          className={`text-2xl cursor-pointer ${selected === 'profile' ? 'opacity-75' : 'opacity-100'}`} 
          onClick={() => setSelected('profile')} 
        />
        <LuUserRound 
          className={`text-2xl cursor-pointer ${selected === 'settings' ? 'opacity-75' : 'opacity-100'}`} 
          onClick={() => setSelected('settings')} 
        />
        <IoNotificationsOutline 
          className={`text-2xl cursor-pointer ${selected === 'notifications' ? 'opacity-75' : 'opacity-100'}`} 
          onClick={() => setSelected('notifications')} 
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-xl font-semibold">Basic Plan</h2>
        <p className="text-gray-600 mb-4">Custom Instructions</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-600 text-white p-4 rounded-lg">Boost Your Mental Strength</div>
          <div className="bg-blue-600 text-white p-4 rounded-lg">Build Meaningful Conversations</div>
          <div className="bg-blue-600 text-white p-4 rounded-lg">Thrive in the Workplace</div>
          <div className="bg-blue-600 text-white p-4 rounded-lg">Classroom Anxiety</div>
        </div>

        {/* Upgrade Section */}
        <div className="mt-6 p-4 bg-gray-200 rounded-lg text-center">
          <p className="font-semibold text-gray-800">Upgrade Plan</p>
          <p className="text-sm text-gray-600">Get MindPadi Pro</p>
        </div>
        {children}
      </main>
    </div>
  );
}

'use client';

import "@/app/globals.css";
import { useState } from 'react';
import { RiHomeLine } from "react-icons/ri";
import { BsBarChartLine } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { ReactNode } from "react";



interface LayoutProps {
    children: ReactNode;
    setSelected :(tab: string) => void;
    selected :string;
  }
  

export default function DashboardLayout({ children, setSelected, selected }: LayoutProps) {

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-fit p-4 bg-blue-700 text-white flex flex-col items-center py-6 space-y-6">
        <Image src={logo} alt="MindPadi" width={50} height={50} className="mb-4" />
        <RiHomeLine 
          className={`text-2xl cursor-pointer ${selected === 'dashboard' ? 'opacity-75' : 'opacity-100'}`} 
          onClick={() => setSelected('dashboard')} 
        />
        <BsBarChartLine
          className={`text-2xl cursor-pointer ${selected === 'analysis' ? 'opacity-75' : 'opacity-100'}`} 
          onClick={() => setSelected('analysis')} 
        />
        <LuUserRound 
          className={`text-2xl cursor-pointer ${selected === 'user' ? 'opacity-75' : 'opacity-100'}`} 
          onClick={() => setSelected('user')} 
        />
        <IoNotificationsOutline 
          className={`text-2xl cursor-pointer ${selected === 'message' ? 'opacity-75' : 'opacity-100'}`} 
          onClick={() => setSelected('messgae')} 
        />
      </aside>

      {/* Main Content */}
      <main className="w-[100%]">
        
        {children}
      </main>
    </div>
  );
}

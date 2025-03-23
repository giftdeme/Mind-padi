import React, { useState } from 'react';
import DashboardLayout from './layout';
import Profile from './profile';
import Image from 'next/image';

import crown from '../../assets/dashboard/crown.png';
import pencil from '../../assets/dashboard/pencil.png';
import avatar from '../../assets/dashboard/Avatar.png';
import vector from '../../assets/dashboard/Vector (2).png';
import glass from '../../assets/dashboard/MagnifyingGlass.png';
import microphone from '../../assets/dashboard/microphone icon.png'
import send from '../../assets/dashboard/send.png'
import mono from '../../assets/dashboard/Monotone add.png'

const Dashboard = () => {
  const [selected, setSelected] = useState('dashboard');

  return (
    <DashboardLayout setSelected={setSelected} selected={selected}>
      <div className='h-screen flex bg-gray-100 relative'>

        {/* Sidebar */}
        <div className='w-[25%] bg-gray-900 text-white p-6 flex flex-col items-center gap-6'>
          {/* Plan Section */}
          <div className='w-full flex items-center justify-between'>
            <Image width={22} height={22} src={crown} alt="icon" />
            <h1 className="text-lg font-semibold">Basic Plan</h1>
            <Image  
              height={22} 
              src={pencil} 
              alt="pencil" 
              className='border-2 border-gray-300 rounded-full p-1' 
            />
          </div>
        </div>

        {/* Main Content */}
        <div className='p-6 w-full flex flex-col justify-between h-full'>
          {/* Top Right Controls */}
          <div className='flex justify-end items-center gap-4 mb-4'>
            <Image src={avatar} alt="avatar" className='w-10 h-10 rounded-full' />
            <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
              <Image src={vector} alt='vector' width={20} height={20} />
            </div>
            <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
              <Image src={glass} alt='glass' width={20} height={20} />
            </div>
          </div>

          {/* Input Field Fixed at Bottom */}
          <div className="fixed bottom-4 left-[27%] w-[70%] flex items-center bg-gray-200 rounded-full p-2 shadow-inner">
            <button className='p-2 rounded-full hover:bg-gray-300 cursor-pointer'>
              <Image src={mono} alt='add'/>
            </button>
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 bg-transparent outline-none px-3"
            />
            
            <button className="p-2 rounded-full hover:bg-gray-300 cursor-pointer">
              
            <Image src={microphone}  alt='microphone'/>
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <Image src={send} alt='send' />
            </button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

import React, { useState } from 'react'
import DashboardLayout from './layout'
import Profile from './profile';

const Dashboard = () => {
  const [selected, setSelected] = useState('dashboard');
  

  return (
    <DashboardLayout setSelected={setSelected} selected={selected}>
      <div className='  h-full  flex bg-blue-500'>

        <div className='flex w-[20%]  bg-red-500'>
          <div className='p-4'>
            {/* logo */}
            <h1 className="text-2xl font-bold">Basic Plan</h1>
          </div>


        </div>

        <div className='p-6 w-full h-10 bg-green-300'>
          {selected === "user" && <Profile />}

        </div>


      </div>





    </DashboardLayout>


  )
}

export default Dashboard
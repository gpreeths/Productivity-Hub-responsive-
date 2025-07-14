import Link from 'next/link'
import React from 'react'

function Homenavbar() {
  return (
    <>
      <div className='bg-gray-200 px-[5vw] border-b-2 border-gray-400 w-screen h-13 font-bold flex justify-between items-center '>
        <div className='flex justify-between items-center gap-0'>
        {/* <img src="favicon.ico" alt="appicon" className='h-[2vw]'/> */}
        <span className='text-base sm:text-xl md:text-lg lg:text-3xl font mono'>TaskMaster</span>
        </div>

<ul className='flex lg:hidden justify-between items-center gap-[3vw] lg:gap-6 md:gap-4 text-sm sm:text-sm md:text-md lg:text-lg non-bold'>
          <li><Link href='/notepad' >Notes</Link></li>
          <li><Link href={'/pomodoro'}>Pomorodo</Link></li>
          {/* no need of using{ in href- becoz its static, not chnaging*/}
          <li><Link href='/todo'>To-Do</Link></li>
        </ul>


        <ul className='hidden lg:flex justify-between items-center gap-[3vw] lg:gap-6 md:gap-4 text-sm sm:text-sm md:text-md lg:text-lg non-bold'>
          <li><Link href='/notepad' >Notes</Link></li>
          <li><Link href={'/pomodoro'}>Pomorodo Timer</Link></li>
          {/* no need of using{ in href- becoz its static, not chnaging*/}
          <li><Link href='/todo'>To - Do - List</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Homenavbar
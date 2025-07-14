import Link from 'next/link'
import React from 'react'
// import Notepad from './notepad/page'
import Homenavbar from '@/Components/Navbars'
import FeatureCard from '@/Components/FeatureCard'


function page() {
  return (
    <>
      <Homenavbar />
      <div>
        <div className='w-[80vw]  m-auto mt-10'>
          <h1 className='font-bold text-base sm:text-sm md:text-xl lg:text-3xl'>Welcome to Mini Productivity Hub !!</h1>
        <p className='mt-[3vh] text-sm sm:text-sm md:text-md lg:text-lg'>Your all-in-one solution for streamlined productivity —
          manage tasks, focus with the Pomodoro technique, and jot down ideas effortlessly.</p>
        </div>

      <div className='container flex flex-col items-center justify-between m-auto gap-[5vh] h-screenflex w-[80vw] p-10'>
          <FeatureCard
        FeatureName='📝 To-Do List'
        FeatureDescription1='Organize your day'
        FeatureDescription2='Manage your tasks and stay on top of your priorities.'
        FeatureGoToButton='To - Do List'
        FeatureImg='todo.jpg'
        FeatureLink='/todo'/>

        <FeatureCard
        FeatureName='⏱ Pomodoro Timer'
        FeatureDescription1='Boost your focus'
        FeatureDescription2='Work in focused intervals with short breaks to maximize productivity.'
        FeatureGoToButton='Pomodoro Timer'
        FeatureImg='pomodoro.jpg'
        FeatureLink='/pomodoro'/>

        <FeatureCard
        FeatureName='🗒️ Notes Pad'
        FeatureDescription1='Capture your ideas'
        FeatureDescription2='Quickly jot down notes, ideas, and reminders..'
        FeatureGoToButton='Note Pad'
        FeatureImg='notes.jpg'
        FeatureLink='/notes'/>
        
      
      </div>
      </div>
    </>
  )
}

export default page
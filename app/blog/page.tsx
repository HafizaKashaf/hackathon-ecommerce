import Common from '@/components/HeroSection/Common'
import React from 'react'
import Leftside from './LeftSide'
import Rightside from './RightSide'


const page= () => {
  return (
    <div className='w-full bg-white'>
        <Common title="Blog List" subtitle="Blog"/>
        <div className='md:max-w-[1320px] gap-2 flex flex-col md:flex-row'>
        <Leftside />
        <Rightside/>
        </div>
    </div>
  )
}
export default page
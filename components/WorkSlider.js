import React from 'react';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const HandleClick = () => {
  window.open("https://weddinstory.vercel.app")
}


const WorkSlider = () => {
  return (
    <div className='flex relative justify-center items-center overflow-hidden group'>
      <div className='flex items-center justify-center relative overflow-hidden group'>
        <Image src={"/project.png"} alt='' width={500} height={300} className='rounded-lg'/>
        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd]
        opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
        </div>
        <div onClick={HandleClick} className='absolute bottom-16 cursor-pointer translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
        transition-all duration-300'>
          <div className='flex items-center gap-x-2 font-semibold trackin-[0.5em]'>
            <div className='delay-100 -translate-y-[500%] group-hover:-translate-y-0 transition-all
            duration-300'>LIVE</div>
            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100'>PROJECT</div>
            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100'>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
  )
}

export default WorkSlider;

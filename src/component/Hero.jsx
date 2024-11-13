import React from 'react'
import city from '../assets/images/bg-image.jpg'

function Hero() {
  return (
    <div className='lg:flex h-[500px] w-[100%]'>
        <div className='bg-[#00239C] lg:w-[600px] w-[100%] mt-[-50px] lg:mt-0'>
            <h2 className='lg:text-[30px] text-[25px] pt-9 lg:pt-0 text-[#ff4d01] font-bold lg:mt-[150px] mt-[100px] lg:w-[400px] w-[300px] lg:ml-[75px] ml-[35px]'>
            Track Your Leaders' Promises in Real-Time</h2>

            <p className='lg:w-[400px] w-[300px] mt-[10px] lg:mt-0 font-bold lg:text-[15px] text-white lg:ml-[75px] ml-[35px]'>
            Our platform offers an easy way to track progress, 
            see achievements, and hold leaders accountable. Join us in building
            a more transparent community.
            </p>
            <button className='bg-[#ff4d01] text-white p-2 lg:w-[160px] w-[150px] rounded lg:ml-[75px] ml-[35px] mt-5 lg:text-[15px] mb-7 lg:mb-0'>
            Explore More
            </button>
        </div>

        <div className='overflow-x-hidden'>
            <img src={city} alt="" className='lg:h-[500px] h-[350px] w-[100%]' />
        </div>
    </div>
  )
}

export default Hero
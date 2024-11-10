import React from 'react'

function Footer() {
  return (
    <div className='lg:h-[420px] bg-[#00239C]'>
        <div className='lg:flex justify-evenly text-white text-[27px]'>
        <div className='lg:mt-[80px] ml-8 lg:ml-0 pt-[20px] lg:pt-0'>
            <h2 className='text-[#ff4d01] lg:text-[35px] text-[15px] pb-4'>Links</h2>
            <ul className='text-[15px] lg:text-[25px]'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Leaders</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
                <li className='cursor-pointer'>Signup</li>
            </ul>
        </div> 

        <div>
            <h2 className='lg:mt-[150px] pt-6 lg:pt-0 ml-8 lg:ml-0 mb-5 text-[#ff4d01] font-bold text-[15px] lg:text-[25px]'>Subscribe To Our Newsletter</h2>
            <form>
                <div className='bg-white w-[350px] m-[auto] lg:w-[auto] flex items-center justify-between'>
                    <input type="text" placeholder='Send Email' className='text-[black] indent-3 w-[200px] lg:w-[auto] outline-none border-none' />
                    <button className='bg-[#ff4d01] text-white text-[15px] font-bold lg:p-3 p-2 lg:w-[200px] w-[120px]'>Subcribe</button>
                </div>
            </form>
        </div>
    </div>
    <p className='text-center mt-10 text-white font-bold'>All Right Reserve 2024</p>
    </div>
    
  )
}

export default Footer
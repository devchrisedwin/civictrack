import React from 'react'

function Footer() {
  return (
    <div className='h-[420px] bg-[#00239C]'>
        <div className='flex justify-evenly text-white text-[27px]'>
        <div className='mt-[80px]'>
            <h2 className='text-[#ff4d01] text-[35px] pb-4'>Links</h2>
            <ul>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Leaders</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
                <li className='cursor-pointer'>Signup</li>
            </ul>
        </div> 

        <div>
            <h2 className='mt-[150px] mb-5 text-[#ff4d01] font-bold'>Subscribe To Our Newsletter</h2>
            <form>
                <div className='bg-white'>
                    <input type="text" placeholder='Send Email' className='indent-3' />
                    <button className='bg-[#ff4d01] text-white font-bold p-3 w-[200px]'>Subcribe</button>
                </div>
            </form>
        </div>
    </div>
    <p className='text-center mt-10 text-white font-bold'>All Right Reserve 2024</p>
    </div>
    
  )
}

export default Footer
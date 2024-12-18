import React, { useState } from 'react'
import logo from '../assets/icons/civiclogo.png'
import { Link } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi';

function Navbar() {

  const [menu, setMenu] = useState(false)

  return (
    <div className='lg:h-[70px] h-[50px] lg:w-[80%] w-[100%] lg:flex justify-between items-center fixed top-0 bg-white z-[1000]'>
        <div className='flex items-center gap-[-3px] lg:ml-[60px]'>
            <div className='flex items-center gap-[-3px] lg:ml-[90px] lg:w-[160px]'>
              <img src={logo} alt="logo" className='w-20' />
              <h3 className='ml-[-15px] text-[14px] font-bold'>CivicTrack</h3>
            </div>
            
            <div className='ml-[160px] lg:hidden'>
              <HiMenu size={35} onClick={()=> setMenu(!menu)}/>
            </div>
        </div>
        
        <div className={menu ? 
          'nav-link  lg:mr-[200px] bg-[#ff4d01] lg:bg-white mt-[-8px] lg:mt-0 p-3'
           :'nav-link  lg:mr-[200px] bg-[#ff4d01] lg:bg-white mt-[-8px] lg:mt-0 hidden lg:block'}>
            <ul className='lg:flex lg:w-[650px] list-none gap-[25px] ml-[17px] lg:ml-[100px] cursor-pointer text-[14px] text-white lg:text-[#ff4d01] font-bold'>
                <Link to='/'><li onClick={() => setMenu(false)} className='p-2 lg:p-0 text-[18px]'>Home</li></Link>
                <Link to='/project-tracker'><li onClick={() => setMenu(false)} className='p-2 lg:p-0 text-[18px]'>Project-Tracker</li></Link>
                <Link to='/forum'><li onClick={() => setMenu(false)} className='p-2 lg:p-0 text-[18px]'>Forum</li></Link>
                <Link to='/about'><li onClick={() => setMenu(false)} className='p-2 lg:p-0 text-[18px]'>About</li></Link>
                <Link to='/signup'><li onClick={() => setMenu(false)} className='p-2 lg:p-0 text-[18px]'>Signup</li></Link>
            </ul>
        </div>

        
    </div>
  )
}

export default Navbar
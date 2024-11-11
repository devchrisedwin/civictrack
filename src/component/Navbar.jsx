import React, { useState } from 'react'
import logo from '../assets/icons/civiclogo.png'
import { Link } from 'react-router-dom'

function Navbar() {

  const [menu, setMenu] = useState(false)

  return (
    <div className='lg:h-[70px] h-[50px] lg:w-[80%] w-[100%] lg:flex justify-between items-center fixed top-0 bg-white z-[1000]'>
        <div className='flex items-center gap-[-3px] lg:ml-[60px]'>
            <div className='flex items-center gap-[-3px] lg:ml-[90px] lg:w-[160px]'>
              <img src={logo} alt="logo" className='w-20' />
              <h3 className='ml-[-15px] text-[18px] font-bold'>CivicTrack</h3>
            </div>
            
            <div className='ml-[100px] lg:hidden'>
              <p onClick={()=> setMenu(!menu)}>MENU</p>
            </div>
        </div>
        
        <div className={menu ? 
          'nav-link  lg:mr-[200px] bg-[#ff4d01] lg:bg-white mt-[-8px] lg:mt-0'
           :'nav-link  lg:mr-[200px] bg-[#ff4d01] lg:bg-white mt-[-8px] lg:mt-0 hidden lg:block'}>
            <ul className='lg:flex lg:w-[650px] list-none gap-[25px] ml-[17px] lg:ml-[100px] cursor-pointer text-[20px] text-white lg:text-[#ff4d01] font-bold'>
                <Link to='/'><li onClick={() => setMenu(false)}>Home</li></Link>
                <Link to='/project-tracker'><li onClick={() => setMenu(false)}>Project-Tracker</li></Link>
                <Link to='/forum'><li onClick={() => setMenu(false)}>Forum</li></Link>
                <li>About</li>
                <li>Contact</li>
                <Link to='/signup'><li onClick={() => setMenu(false)}>Signup</li></Link>
            </ul>
        </div>

        
    </div>
  )
}

export default Navbar
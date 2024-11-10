import React, { useState } from 'react'
import logo from '../assets/icons/civiclogo.png'
import { Link } from 'react-router-dom'

function Navbar() {

  const [menu, setMenu] = useState(true)

  return (
    <div className='lg:h-[100px] h-[50px] lg:w-[80%] w-[100%] lg:flex justify-between items-center navbar'>
        <div className='flex items-center gap-[-3px] lg:ml-[120px]'>
            <div className='flex items-center gap-[-3px] lg:ml-[120px]'>
              <img src={logo} alt="logo" className='w-20' />
              <h3 className='ml-[-15px] text-[18px] font-bold'>CivicTrack</h3>
            </div>
            
            <div className='ml-[100px] lg:hidden'>
              <p onClick={()=> setMenu(!menu)}>MENU</p>
            </div>
        </div>
        {menu &&
        <div className='nav-link  lg:mr-[200px] bg-[#ff4d01] lg:bg-white mt-[-8px] lg:mt-0'>
            <ul className='lg:flex list-none gap-[25px] ml-[17px] lg:ml-0 cursor-pointer text-[20px] text-white lg:text-[#ff4d01] font-bold'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/project-tracker'><li>Project-Tracker</li></Link>
                <Link to='/forum'><li>Forum</li></Link>
                <li>About</li>
                <li>Contact</li>
                <Link to='/signup'><li>Signup</li></Link>
            </ul>
        </div>
        }

        
    </div>
  )
}

export default Navbar
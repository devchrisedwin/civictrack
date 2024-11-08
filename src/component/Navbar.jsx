import React from 'react'
import logo from '../assets/icons/civiclogo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-[100px] w-[80%] flex justify-between items-center navbar'>
        <div className='flex items-center gap-[-3px] ml-[120px]'>
            <img src={logo} alt="logo" className='w-20' />
            <h3 className='ml-[-15px] text-[18px] font-bold'>CivicTrack</h3>
        </div>

        <div className='nav-link mr-[200px]'>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/project-tracker'><li>Project-Tracker</li></Link>
                <Link to='/forum'><li>Forum</li></Link>
                <li>About</li>
                <li>Contact</li>
                <Link to='/signup'><li>Signup</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import Input from '../component/Input'
import { Link } from 'react-router-dom'

function Signup() {
    const [signupAsLeader, setSignUpAsLeader] = useState(false)

    function handleSwichForm() {
        setSignUpAsLeader(!signupAsLeader)
    }
  return (
    <div className='mt-[100px] border-t'>
        {!signupAsLeader ?
        <form className='flex flex-col border border-grey shadow-xl w-[500px] m-[auto] p-3 rounded-2xl mt-[150px]'>
            <h3 className='font-bold text-center text-[25px] text-[#ff4d01]'>Sign Up</h3>
            <p onClick={handleSwichForm} className='text-center text-[#00239C] cursor-pointer font-bold'>{signupAsLeader ? 'sign up as normal user?' : 'Sign up as a Leader?'}</p>
            <Input 
                label={'username'}
                type={'text'}
                placeholder={'enter your username'}
                name={'username'}
                value={'username'}
            />
            <Input 
                label={'Email'}
                type={'email'}
                placeholder={'enter your Email'}
                name={'email'}
                value={'username'}
            />
            <Input 
                label={'Password'}
                type={'password'}
                placeholder={'enter your Password'}
                name={'password'}
                value={'username'}
            />
            <button className='bg-[#ff4d01] text-white w-[300px] m-[auto] mt-4 rounded-2xl p-2 font-bold'>submit</button>
            <p className='text-center cursor-pointer'>already have an account? <Link to='/login'><span className='text-[#ff4d01]'>login</span></Link></p>
        </form> :

        <form className='mb-4 flex flex-col border border-grey shadow-xl w-[500px] m-[auto] p-3 rounded-2xl mt-[70px]'>
            <h3 className='font-bold text-center text-[25px] text-[#ff4d01]'>Sign Up</h3>
            <p onClick={handleSwichForm} className='text-center text-[#00239C] cursor-pointer font-bold'>{signupAsLeader ? 'Sign up as a Normal User?' : 'Sign up as a Leader?'}</p>
            <Input 
                label={'username'}
                type={'text'}
                placeholder={'enter your username'}
                name={'username'}
                value={'username'}
            />
            <Input 
                label={'Email'}
                type={'email'}
                placeholder={'enter your Email'}
                name={'email'}
                value={'username'}
            />
            <Input 
                label={'Password'}
                type={'password'}
                placeholder={'enter your Password'}
                name={'password'}
                value={'username'}
            />
             <Input 
                label={'Position'}
                type={'text'}
                placeholder={"what's your position / office"}
                name={'position'}
                value={'username'}
            />
            <Input 
                label={'State'}
                type={'text'}
                placeholder={"Enter your State"}
                name={'state'}
                value={'username'}
            />
            <button className='bg-[#ff4d01] text-white w-[300px] m-[auto] mt-4 rounded-2xl p-2 font-bold'>submit</button>
            <p className='text-center cursor-pointer'>already have an account? <Link to='/login'><span className='text-[#ff4d01]'>login</span></Link></p>
        </form>
        }

    </div>
  )
}

export default Signup
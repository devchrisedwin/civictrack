import React, { useEffect, useState } from 'react'
import Input from '../component/Input'
import { Link } from 'react-router-dom'

function Signup() {
    const [signupAsLeader, setSignUpAsLeader] = useState(false)
    const [inputValue, setInputValue] = useState({
        username: "",
        email: "",
        password: "",
    })
    const [data, setData] = useState(null)
    const [message, setMessage] = useState('')

    function handleSwichForm() {
        setSignUpAsLeader(!signupAsLeader)
    }

    function handleChange(e) {
        setInputValue((prevState) => {
            return {...prevState, [e.target.name]:e.target.value}
        })
    }

     function handleSubmit(e) {
        e.preventDefault()
        fetch('https://springboot-civictrackerapp-9a98d86859c9.herokuapp.com/api/v1/auth/register', {
            method: "POST",
            body: JSON.stringify(inputValue),
            headers: {
                "content-type": "application/json"
            }
        })
        .then((response) => {
            console.log(response)
            console.log(response.json())
        })
        .catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className='mt-[70px] border-t'>
        {!signupAsLeader ?
        <form onSubmit={handleSubmit}
        className='flex flex-col border border-grey shadow-xl lg:w-[500px] w-[90%] m-[auto] p-3 rounded-2xl lg:mt-[50px] mt-6'>
            <h3 className='font-bold text-center text-[25px] text-[#ff4d01]'>Sign Up</h3>
            <p onClick={handleSwichForm} className='text-center text-[#00239C] cursor-pointer font-bold mb-5'>{signupAsLeader ? 'sign up as normal user?' : 'Sign up as a Leader?'}</p>
            <Input 
                label={'username'}
                type={'text'}
                placeholder={'enter your username'}
                name={'username'}
                value={inputValue.username}
                onChange={handleChange}
            />
            <Input 
                label={'Email'}
                type={'email'}
                placeholder={'enter your Email'}
                name={'email'}
                value={inputValue.email}
                onChange={handleChange}
            />
            <Input 
                label={'Password'}
                type={'password'}
                placeholder={'enter your Password'}
                name={'password'}
                value={inputValue.password}
                onChange={handleChange}
            />
            <button type='submit' className='bg-[#ff4d01] text-white lg:w-[300px] w-[80%] m-[auto] mt-4 rounded-2xl p-2 font-bold'>submit</button>
            <p className='text-center cursor-pointer'>already have an account? <Link to='/login'><span className='text-[#ff4d01]'>login</span></Link></p>
        </form> :

        <form className='mb-4 flex flex-col border border-grey shadow-xl lg:w-[500px] w-[90%] m-[auto] p-3 rounded-xl lg:mt-[50px] mt-6'>
            <h3 className='font-bold text-center text-[15px] text-[#ff4d01]'>Sign Up</h3>
            <p onClick={handleSwichForm} className='text-center text-[#00239C] cursor-pointer font-bold mb-5'>{signupAsLeader ? 'Sign up as a Normal User?' : 'Sign up as a Leader?'}</p>
            <Input 
                label={'username'}
                type={'text'}
                placeholder={'enter your username'}
                name={'username'}
                value={inputValue.username}
                onChange={handleChange}
            />
            <Input 
                label={'Email'}
                type={'email'}
                placeholder={'enter your Email'}
                name={'email'}
                value={inputValue.email}
                onChange={handleChange}
            />
            <Input 
                label={'Password'}
                type={'password'}
                placeholder={'enter your Password'}
                name={'password'}
                value={inputValue.password}
                onChange={handleChange}
            />
             <Input 
                label={'Position'}
                type={'text'}
                placeholder={"what's your position / office"}
                name={'position'}
                value={inputValue.position}
                onChange={handleChange}
            />
            <Input 
                label={'State'}
                type={'text'}
                placeholder={"Enter your State"}
                name={'state'}
                value={inputValue.state}
                onChange={handleChange}
            />
            <button className='bg-[#ff4d01] text-white lg:w-[300px] w-[90%] m-[auto] mt-4 rounded-2xl p-2 font-bold'>submit</button>
            <p className='text-center cursor-pointer'>already have an account? <Link to='/login'><span className='text-[#ff4d01]'>login</span></Link></p>
        </form>
        }

    </div>
  )
}

export default Signup
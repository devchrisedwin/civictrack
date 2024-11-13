import React, {useState} from 'react'
import Input from '../component/Input'
import { Link } from 'react-router-dom'

function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
})

function handleChange(e) {
  setInputValue((prevState) => {
      return {...prevState, [e.target.name]:e.target.value}
  })
}

  return (
    <div className='mt-[70px] border-t'>
        <form className='flex flex-col border border-grey shadow-xl lg:w-[500px] w-[90%] m-[auto] p-3 rounded-2xl mt-[90px]'>
            <h3 className='font-bold text-center text-[25px] text-[#ff4d01]'>Login</h3>
            <Input 
                label={'username'}
                type={'text'}
                placeholder={'enter your username'}
                name={'username'}
                value={inputValue.username}
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
            <button className='bg-[#ff4d01] text-white w-[300px] m-[auto] mt-4 rounded-2xl p-2 font-bold'>submit</button>
            <p className='text-center cursor-pointer'>don't have an account? <Link to='/signup'><span className='text-[#ff4d01]'>sign up</span></Link></p>
        </form>
    </div>
  )
}

export default Login
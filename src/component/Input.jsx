import React from 'react'

function Input({type, placeholder, name, value, label}) {
  return (
    <div>
        <label htmlFor={name} className='pb-[20px] font-bold'>{label}</label>
        <div className='border border-[#00239C] rounded-2xl overflow-hidden mt-3 mb-3'>
            <input type={type}
                placeholder={placeholder}
                name={name}
                // value={value}
                id={name}
                className='border-none outline-none p-3 w-[100%]'
            />
        </div>
    </div>

  )
}

export default Input
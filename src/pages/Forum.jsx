import React, { useState } from 'react'

function Forum() {
    const [inputValue, setInputValue] = useState('')
    const [data, setData] = useState([])
    let date = new Date()

    function handleSubmit(e) {
        e.preventDefault()
        setData([...data, inputValue])
        setInputValue("")
    }

  return (
    <div className='mt-[100px] border lg:w-[95%] h-[650px] m-[auto] lg:grid grid-cols-2 shadow-xl'>
        <div className='border-r'>
            <h3 className='font-bold ml-4'>Dicussion Forum</h3>
            <div className='w-[100%] h-[520px] comment'>
                {data.length !== 0 ?
                <p className='opacity-[0.5] ml-5 border-b mb-7'>{data.length > 1 ? `${data.length} comments` : `${data.length} comment`}</p> : ""}
                {data.length ? data.map((item) => (
                    <>
                        <p className='ml-3 font-semibold pt-2 w-[300px]'>{item}</p>
                        <p className='opacity-[0.6] ml-3'>{date.getMinutes()} minutes ago</p>
                    </>
                )): <p className='text-center font-bold mt-5'>No Comment Yet</p>}
            </div>
            <div className='flex items-center gap-2'>
                <form onSubmit={handleSubmit} className='flex items-center gap-3 mt-1'>
                    <textarea onChange={(e) => setInputValue(e.target.value)} value={inputValue} name="" id="" className='p-3 border bg-white lg:w-[300px] w-[230px] indent-3 lg:ml-3 ml-[15px]'></textarea>
                    <button className='bg-[#00239C] text-white ont-bold w-[100px] p-2 rounded-full'>send</button>
                </form>
            </div>
        </div>
        <div className='font-bold'>
           
            <div className='lg:mt-[100px] mt-[50px]'>
                <form onSubmit={handleSubmit} className='flex flex-col items-left gap-2 border p-3 lg:w-[450px] m-[auto] shadow-xl'>
                    <h3 className='ml-8'>Send Information</h3>
                    <textarea onChange={(e) => setInputValue(e.target.value)} name="" id="" className='indent-3 border bg-white lg:w-[400px] h-[200px] rounded-2xl ml-3 p-3'></textarea>
                    <button className=' ml-4 bg-[#00239C] text-white ont-bold w-[100px] p-2 rounded-full'>send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Forum
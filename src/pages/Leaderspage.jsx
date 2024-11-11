import React, { useContext, useState } from 'react'
import '../App.css'
import { LeaderContext } from '../context/LeaderContext'
import Rating from '../component/Rating'
function Leaderspage() {

  const {leader} = useContext(LeaderContext)

  const [selected, setSelected] = useState('')
  const [openCommentBox, setOpenCommentBox] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState([])
  let date = new Date()

  function handleCommentBox(projectId) {
    setSelected(projectId)
    setOpenCommentBox(!openCommentBox)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setData([...data, inputValue])
    setInputValue("")
  }
  
  return (

    <div className='lg:mt-[70px] border-t  lg:grid grid-cols-[300px_600px_430px]'>
      
       <div className='border-r'>
          <div className='border-b border-l mb-5 lg:mb-0 mt-16 lg:mt-0'>
            <input type="search" placeholder='search a leader' 
            className='outline-none border-none p-[12px] w-[160px]' />
            <button className='border w-[100px] lg:ml-8 border-[#00239C] rounded-full font-bold'>search</button>
          </div>
          <div className='flex lg:block overflow-scroll hide-scrollbar'>
            {leader.slice(0,8).map((l) => (

              <div className='lg:flex items-center lg:gap-3 mb-3 lg:mb-0 lg:p-6 lg:ml-0 ml-4 lg:w-[auto] m-[auto]'>

                <div className='profile-pic w-[80px] m-[auto] flex flex-col items-center justify-center overflow-hidden'>
                  <img src={l.bio.image} alt="" 
                  className='w-[70px] h-[48px] border-r-[50%]' />
                </div>

                <div className='w-[80px] m-[auto] lg:ml-[-50px]'>
                  <p className='font-bold w-[100px] text-[10px] lg:text-[16px] ml-5 lg:ml-0'>{l.bio.name}</p>
                  <p className='opacity-[0.7] text-[10px] lg:text-[16px] ml-5 lg:ml-0'>{l.bio.position}</p>
                </div>

              </div>
            ))} 
          </div>
         
       </div>

       <div className='flex flex-col gap-6'>
          <div className='border-b lg:block hidden'>
            <input type="search" placeholder='search project' 
            className='outline-none border-none p-3 w-[400px] indent-3' />
            <button className='border w-[150px] p-1 border-[#00239C] rounded-full font-bold'>search</button>
          </div>

          {leader.slice(0,3).map((p) => (
              p.projects.map((lp) => (
                <>
                <div className='w-[100%] h-[470px] border-b flex flex-col mb-8'>
                  <img src={lp.image} alt="project images" className='w-[100%] h-[350px]' />
                  <div className='pl-3 mt-2'>
                    <p className='font-bold text-[13px] lg:text-[16px]'>{lp.name.toUpperCase()}</p>
                    <Rating/>
                    <p className='font-bold text-[13px] lg:text-[16px]'>{lp.completed ? 'COMPLETED' : 'INPROGRESS'}</p>
                    <div className='flex justify-between items-center pb-2'>
                      <p className='opacity-[0.7] text-[13px] lg:text-[16px]'>{`PowerBy: ${p.bio.position} ${p.bio.name}`}</p>
                      <button onClick={() => handleCommentBox(lp.id)} className='border lg:w-[200px] w-[100px] mr-2 p-1 rounded-2xl'>comments</button>
                    </div>
                  </div>

               
                  
                </div>
                {/*  comment section */}
                {selected === lp.id && openCommentBox ?
                <div className='border'>
                  <div className='w-[100%] h-[300px] comment'>
                    <h3 className='font-bold ml-5 mt-2'>{lp.name.toUpperCase()}</h3>
                    {data.length !== 0 ?
                    <p className='opacity-[0.5] ml-5'>{data.length > 1 ? `${data.length} comments` : `${data.length} comment`}</p> : ""}

                    {data.length ? data.map((item) => (
                    <>
                        <p className='ml-5 font-semibold pt-2 w-[300px]'>{item}</p>
                        <p className='opacity-[0.6] ml-5'>{date.getMinutes()} minutes ago</p>
                    </>
                    )): <p className='text-center font-bold mt-5'>No Comment Yet</p>}
                  </div>
                  <div className='flex items-center gap-2'>
                    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
                      <textarea onChange={(e) => setInputValue(e.target.value)} value={inputValue} name="" id="" className='lg:indent-3 border bg-white lg:w-[400px] w-[230px] lg:rounded-2xl ml-3 lg:p-3 p-2'></textarea>
                      <button className='bg-[#00239C] text-white ont-bold w-[100px] p-2 rounded-full'>send</button>
                    </form>
                  </div>
                </div>: ""
                }
                </>
              ))
          ))}
          
        </div>


       <div className='border'>
          <h3 className='font-bold p-3 mb-3'>Categories</h3>
          <h3 className='font-bold p-3 mb-3'>project status</h3>
          <label htmlFor='pending' className='flex ml-4 items-center gap-3 mb-3 cursor-pointer'>
            <input type="checkbox" id='pending' className='cursor-pointer' />
             <p className='mt-[-6px] font-bold'>pending</p>
          </label>
          <label htmlFor='completed' className='flex ml-4 items-center gap-3 mb-3 cursor-pointer'>
            <input type="checkbox" id='completed' className='cursor-pointer' />
             <p className='mt-[-6px] font-bold'>completed</p>
          </label>
          <label htmlFor='in-progress' className='flex ml-4 items-center gap-3 mb-3 cursor-pointer'>
            <input type="checkbox" id='in-progress' className='cursor-pointer' />
             <p className='mt-[-6px] font-bold'>in-progress</p>
          </label>


          <h3 className='font-bold p-3 mb-3'>offices</h3>
          <label htmlFor='president' className='flex ml-4 items-center gap-3 mb-3 cursor-pointer'>
            <input type="checkbox" id='president' className='cursor-pointer' />
             <p className='mt-[-6px] font-bold'>president</p>
          </label>
          <label htmlFor='senator' className='flex ml-4 items-center gap-3 mb-3 cursor-pointer'>
            <input type="checkbox" id='senator' className='cursor-pointer' />
             <p className='mt-[-6px] font-bold'>senator</p>
          </label>
          <label htmlFor='governor' className='flex ml-4 items-center gap-3 mb-3 cursor-pointer'>
            <input type="checkbox" id='governor' className='cursor-pointer' />
             <p className='mt-[-6px] font-bold'>governor</p>
          </label>
          <label htmlFor='representative' className='flex ml-4 items-center gap-3 mb-3 cursor-pointer'>
            <input type="checkbox" id='representative' className='cursor-pointer' />
             <p className='mt-[-6px] font-bold'>house of representatives</p>
          </label>
          <label htmlFor='assembly' className='flex ml-4 items-center gap-3 mb-3 cursor-pointer'>
            <input type="checkbox" id='assembly' className='cursor-pointer' />
             <p className='mt-[-6px] font-bold'>house of assembly</p>
          </label>
          <label htmlFor='chairman' className='flex ml-4 items-center gap-3  mb-3 cursor-pointer'>
            <input type="checkbox" id='chairman' className='cursor-pointer' />
             <p className='mt-[-6px] font-bold'>chairman L.G.A</p>
          </label>
          <label htmlFor='councilor' className='flex ml-4 items-center gap-3  mb-3 cursor-pointer'>
            <input type="checkbox" id='councilor' className='cursor-pointer' />
             <p className='mt-[-6px] font-bold'>councilor</p>
          </label>
       </div>
    </div>
  )
}

export default Leaderspage
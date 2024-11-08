import React, { useContext, useState } from 'react'
import city from '../assets/images/bg-image.jpg'
import Footer from '../component/Footer'
import projects from '../data/project'
import Rating from '../component/Rating'
import { LeaderContext } from '../context/LeaderContext'



function Homepage() {
    const {leader} = useContext(LeaderContext)
    const [project, setProject] = useState(projects)

    let date = '24 Jan'

   

  return (
    <div className='pt-16'>
        <div className='flex h-[600px]'>
            <div className='bg-[#00239C] w-[700px]'>
                <h2 className='text-[35px] text-[#ff4d01] font-bold mt-[150px] w-[450px] ml-[75px]'>
                Track Your Leaders' Promises in Real-Time</h2>

                <p className='w-[500px] font-bold text-[20px] text-white ml-[75px]'>
                Our platform offers an easy way to track progress, 
                see achievements, and hold leaders accountable. Join us in building
                a more transparent community.
                </p>
                <button className='bg-[#ff4d01] text-white p-5 w-[200px] rounded ml-[75px] mt-5 text-[20px]'>
                 Explore More
                </button>
            </div>

            <div className=''>
                <img src={city} alt="" className='h-[600px]' />
            </div>
        </div>
        <div className='flex'>
            <div className='h-[400px] w-[25%] bg-[#ff4d01] mt-[-100px] ml-[5%]'>
                <p className='text-white text-[23px] font-bold p-10 mt-6'>
                Leadership entails responsibility. Leadership demands accountability and transparency. 
                 When you have that, you will earn people’s trust and respect.
                </p>
                <p className='text-right mr-8 font-bold'>Olusegun Obasanjo</p>
            </div>

            <div className='h-[300px] w-[70%] '>
                <h2 className='text-[20px] ml-10 font-bold text-[#00239C] mt-3'>TOP PROJECTS</h2>
                <div className='flex justify-evenly'>
                    {projects.slice(0,3).map((tProject) => (
                        <div key={tProject.id} className='w-[300px] h-[240px] border mt-[10px] shadow-xl rounded-2xl overflow-hidden'>
                            <img src={tProject.image} alt="" className='w-[300px] h-[190px]'/>
                            <p className='ml-1 font-bold'>{tProject.name}</p>
                            <Rating/>
                        </div>
                    ))}
                </div>
            </div> 
        </div>


        <h2 className='pt-8 text-[20px] font-bold'>Explore Different Project</h2>
        <div className='flex justify-between mt-3'>
            {project.slice(0, 4).map((project) => (
                <div key={project.id} className='w-[340px] h-[330px] border shadow-xl rounded-xl overflow-hidden'>
                    <img src={project.image} alt="" className='w-[345px] h-[251px]' />
                    <p className='ml-1 font-bold'>{project.name}</p>
                    <Rating/>
                    <p className='ml-1 font-bold opacity-[0.5]'>powered by: {project.promiseBy}</p>
                </div>
            ))}
        </div>
        
        <div className='flex justify-between'>
            <h2 className='pt-8 text-[20px] font-bold'>About Us</h2>
            <h2 className='pt-8 text-[20px] font-bold'>Meet our Political Leaders</h2>
        </div>
        
        <div className='flex justify-between shadow-xl mt-3'>
            <div className='w-[40%] h-[300px]'>
                <h2 className='pt-8 text-[20px] font-bold ml-8'>Our Mission</h2>
                <p className='p-8'>
                    Our mission is simple: to empower citizens by providing 
                    a clear view of civic projects and enabling them to hold their leaders accountable. 
                    By making project timelines, milestones, and statuses 
                    accessible and easy to understand, we aim to bridge 
                    the gap between leaders and communities, fostering trust and promoting real progress
                </p>
                <button className='ml-8 border border-[#ff4d01] rounded-full p-3 w-[150px] mt-[-35px] font-bold'>Explore more</button>
            </div>
            <div className='w-[60%] flex justify-between gap-1'>
                {leader.slice(0,3).map((l) => (
                    <div key={l.id} className='w-[340px] h-[300px] border bg-[#ff4d01] rounded-xl overflow-hidden shadow-xl'>
                        <img src={l.bio.image} alt="" className='w-[340px] h-[240px] bg-[#ffff]' />
                        <p className='ml-2 font-bold text-white'>{l.bio.name}</p>
                        <p className='ml-2 font-bold text-white opacity-[0.8]'>{l.bio.state} {l.bio.position}</p>
                    </div>
                ))}
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Homepage
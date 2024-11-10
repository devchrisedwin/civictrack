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
    <div className='lg:pt-16 overflow-hidden'>
        <div className='lg:flex h-[600px] w-[100%]'>
            <div className='bg-[#00239C] lg:w-[700px] w-[100%] mt-[-50px] lg:mt-0'>
                <h2 className='lg:text-[35px] text-[25px] pt-9 lg:pt-0 text-[#ff4d01] font-bold lg:mt-[150px] mt-[100px] lg:w-[450px] w-[300px] lg:ml-[75px] ml-[35px]'>
                Track Your Leaders' Promises in Real-Time</h2>

                <p className='lg:w-[500px] w-[300px] mt-[10px] lg:mt-0 font-bold lg:text-[20px] text-white lg:ml-[75px] ml-[35px]'>
                Our platform offers an easy way to track progress, 
                see achievements, and hold leaders accountable. Join us in building
                a more transparent community.
                </p>
                <button className='bg-[#ff4d01] text-white lg:p-5 p-2 lg:w-[200px] w-[150px] rounded lg:ml-[75px] ml-[35px] mt-5 lg:text-[20px] mb-7 lg:mb-0'>
                 Explore More
                </button>
            </div>

            <div className='overflow-x-hidden'>
                <img src={city} alt="" className='lg:h-[600px] h-[300px] w-[100%]' />
            </div>
        </div>
        <div className='lg:flex w-[100%]'>
            <div className='lg:h-[350px] lg:w-[25%] w-[100%] bg-[#ff4d01] lg:mt-[-100px] lg:ml-[5%]'>
                <p className='text-white lg:text-[23px] font-bold lg:p-8 p-6 mt-6 lg:w-[400px] w-[300px]'>
                Leadership entails responsibility. Leadership demands accountability and transparency. 
                 When you have that, you will earn people’s trust and respect.
                </p>
                <p className='text-right lg:mr-8 mr-5 font-bold pb-3 lg:pb-0'>Olusegun Obasanjo</p>
            </div>

            <div className='h-[300px] lg:w-[70%]'>
                <h2 className='lg:text-[20px] text-[14px] text-center lg:text-left lg:ml-10 ml-5 font-bold text-[#00239C] mt-3'>Top Projects</h2>
                <div className='lg:flex justify-evenly'>
                    {projects.slice(0,3).map((tProject) => (
                        <div key={tProject.id} className='lg:w-[300px] md:w-[100%] md:h-[550px] md:mb-10 w-[350px] m-[auto] lg:h-[240px] h-[260px] border mt-[10px] shadow-xl lg:rounded-2xl overflow-hidden'>
                            <img src={tProject.image} alt="" className='lg:w-[300px] md:w-[100%] md:h-[500px] w-[350px] lg:h-[190px] h-[210px]'/>
                            <p className='ml-1 font-bold'>{tProject.name}</p>
                            <Rating/>
                        </div>
                    ))}
                </div>
            </div> 
        </div>

        <div className='mt-[600px] md:mt-[1500px] lg:mt-0'>
        <h2 className='lg:pt-8 text-[20px] font-bold text-center lg:text-left lg:ml-0 mb-3 lg:mb-0'>Explore Different Project</h2>
        <div className='lg:flex justify-between lg:mt-3 m-[auto]'>
            {project.slice(0, 4).map((project) => (
                <div key={project.id} className='w-[340px] h-[330px] lg:h-[330px] lg:w-[340px] m-[auto] md:w-[100%] md:h-[580px] md:mb-10 shadow-xl lg:rounded-xl overflow-hidden mb-5 lg:mb-0'>
                    <img src={project.image} alt="" className='w-[345px] h-[251px] md:w-[100%] md:h-[500px] lg:h-[251px] lg:w-[345px]' />
                    <p className='ml-1 font-bold'>{project.name}</p>
                    <Rating/>
                    <p className='ml-1 font-bold opacity-[0.5]'>powered by: {project.promiseBy}</p>
                </div>
            ))}
        </div>
        </div>

        <div className='lg:flex justify-between hidden lg:visible'>
            <h2 className='pt-8 text-[20px] font-bold'>About Us</h2>
            <h2 className='pt-8 text-[20px] font-bold'>Meet our Political Leaders</h2>
        </div>
        
        <div className='lg:flex justify-between shadow-xl mt-3'>
            <div className='lg:w-[40%] h-[300px]'>
                <h2 className='pt-8 text-[20px] font-bold ml-8'>Our Mission</h2>
                <p className='p-8'>
                    Our mission is simple: to empower citizens by providing 
                    a clear view of civic projects and enabling them to hold their leaders accountable. 
                    By making project timelines, milestones, and statuses 
                    accessible and easy to understand, we aim to bridge 
                    the gap between leaders and communities, fostering trust and promoting real progress
                </p>
                <button className='ml-8 border border-[#ff4d01] rounded-full p-3 w-[150px] mt-[-35px] font-bold'>Explore more</button>
                <p className='lg:hidden font-bold text-center p-1 mt-3'>Meet Our Leaders</p>
            </div>
            <div className='lg:w-[60%] lg:flex justify-between gap-1 mt-[100px] lg:mt-0'>
                {leader.slice(0,3).map((l) => (
                    <div key={l.id} className='w-[340px] h-[300px] m-[auto] mb-7 lg:mb-0 border bg-[#ff4d01] lg:rounded-xl overflow-hidden shadow-xl'>
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
import React, { useContext, useState } from 'react'
import city from '../assets/images/bg-image.jpg'
import Footer from '../component/Footer'
import projects from '../data/project'
import Rating from '../component/Rating'
import { LeaderContext } from '../context/LeaderContext'
import Hero from '../component/Hero'



function Homepage() {
    const {leader} = useContext(LeaderContext)
    const [project, setProject] = useState(projects)

    let date = '24 Jan'

   

  return (
    <div className='lg:pt-11 overflow-hidden'>
        <Hero/>
        <div className='lg:flex w-[100%]'>
            <div className='lg:h-[320px] lg:w-[30%] w-[100%] h-[400px] bg-[#ff4d01] lg:mt-[-60px] lg:ml-[5%]'>
                <p className='text-white lg:text-[17px] font-bold lg:p-8 p-6 pt-[180px] mt-6 lg:w-[300px] w-[300px]'>
                Leadership entails responsibility. Leadership demands accountability and transparency. 
                 When you have that, you will earn people’s trust and respect.
                </p>
                <p className='text-right lg:mr-8 mr-5 font-bold pb-3 lg:pb-0'>Olusegun Obasanjo</p>
            </div>

            <div className='h-[300px] lg:w-[70%]'>
                <h2 className='lg:text-[14px] text-[14px] text-center lg:text-left lg:ml-10 ml-5 font-bold text-[#00239C] mt-3'>Top Projects</h2>
                <div className='lg:flex justify-evenly'>
                    {projects.slice(0,3).map((tProject) => (
                        <div key={tProject.id} className='lg:w-[230px] md:w-[100%] md:h-[550px] md:mb-10 w-[350px] m-[auto] lg:h-[220px] h-[260px] border mt-[10px] shadow-xl lg:rounded-xl overflow-hidden'>
                            <img src={tProject.image} alt="" className='lg:w-[230px] md:w-[100%] md:h-[500px] w-[350px] lg:h-[170px] h-[210px]'/>
                            <p className='ml-1 font-bold text-[14px]'>{tProject.name}</p>
                            <div className='w-[100px] lg:ml-1 ml-1'>
                                <Rating/>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>

        <div className='mt-[600px] md:mt-[1500px] lg:mt-0'>
        <h2 className='lg:pt-8 text-[15px] font-bold text-center lg:text-left lg:ml-5 mb-3 lg:mb-0'>Explore Different Project</h2>
        <div className='lg:flex justify-between lg:mt-3 m-[auto]'>
            {project.slice(0, 4).map((project) => (
                <div key={project.id} className='w-[340px] h-[330px] lg:h-[230px] lg:w-[240px] m-[auto] md:w-[100%] md:h-[580px] md:mb-10 shadow-xl lg:rounded-xl overflow-hidden mb-5 lg:mb-0'>
                    <img src={project.image} alt="" className='w-[345px] h-[251px] md:w-[100%] md:h-[500px] lg:h-[160px] lg:w-[240px]' />
                    <p className='ml-1 font-bold'>{project.name}</p>
                    <div className='w-[100px] lg:ml-1 ml-1'>
                        <Rating/>
                    </div>
                    <p className='ml-1 font-bold opacity-[0.5] text-[14px]'>powered by: {project.promiseBy}</p>
                </div>
            ))}
        </div>
        </div>

        <div className='lg:flex justify-between hidden lg:visible'>
            <h2 className='pt-8 text-[15px] font-bold lg:ml-5'>About Us</h2>
            <h2 className='pt-8 text-[15px] font-bold mr-5'>Meet our Political Leaders</h2>
        </div>
        
        <div className='lg:flex justify-between mt-3 border-t'>
            <div className='lg:w-[40%] h-[350px]'>
                <h2 className='pt-8 text-[15px] font-bold ml-8'>Our Mission</h2>
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
            <div className='lg:w-[60%] lg:flex justify-between gap-1 mt-[60px] lg:mt-0'>
                {leader.slice(0,3).map((l) => (
                    <div key={l.id} className='w-[340px] h-[235px] m-[auto] mb-7 lg:mb-0 bg-[#ff4d01] lg:rounded-xl overflow-hidden shadow-xl'>
                        <img src={l.bio.image} alt="" className='w-[340px] h-[170px] border bg-[#ffff]' />
                        <p className='ml-2 font-bold text-white text-[14px] mt-2'>{l.bio.name}</p>
                        <p className='ml-2 font-bold text-white opacity-[0.8] text-[14px]'>{l.bio.state} {l.bio.position}</p>
                    </div>
                ))}
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Homepage
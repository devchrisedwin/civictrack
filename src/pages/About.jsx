import React from 'react'
import Hero from '../component/Hero'
import Footer from '../component/Footer'

function About() {
  return (
    <div>
       <Hero/>

       <div className='mt-[190px] lg:mt-0 pl-4 lg:pl-0 pr-4 lg:pr-0 opacity-[0.8]'>
          <h2 className='font-bold pb-2 pt-3'>About CivicTrack</h2>
          <p className='mb-3'>
            At CivicTrack, we believe in the power of accountability and informed 
            communities. Every election season, leaders make promises to improve 
            infrastructure, healthcare, education, and more—but too often, 
            these promises are difficult to track. CivicTrack was created to 
            change that. Our platform allows citizens to easily monitor the 
            progress of projects promised by their elected leaders, 
            ensuring transparency and fostering a culture of responsibility.
          </p>

          <h2 className='font-bold pb-2 pt-3'>How It Works</h2>

          <p className='lg:w-[600px] mb-3'>
          With CivicTrack, users can browse projects initiated 
          by their leaders and see real-time updates on their progress.
          </p>
          <p className='lg:w-[600px] mb-3'>
          From inception to completion, each project is 
          documented, including key milestones and any delays
          </p>
          <p className='lg:w-[600px] mb-3'>
          CivicTrack encourages users to engage with the platform by sharing updates, 
          providing feedback, and fostering discussions around public projects.
          </p>

          <h2 className='font-bold pb-2 pt-3'>Why CivicTrack</h2>
          <p className='pb-3'>
          We are driven by the belief that transparency is the foundation of 
          good governance. When citizens are informed, they are empowered 
          to participate in meaningful change and hold leaders to their commitments. 
          With CivicTrack, we hope to build stronger, 
          more engaged communities where trust and accountability are valued.
          </p>
       </div>
       <Footer/>
    </div>
  )
}

export default About
import React from 'react'

const About = () => {

    let message = "~ About me"
  return (


    <section className='w-full h-full flex flex-col items-center justify-start '>

        <div className=' mt-5'> 
            <span className='courier-prime-regular font-bold tracking-tight'> {message}</span>
        </div>

        <div className='border-2w-full h-1/2 m-7'>
            <span>Growing up in a diverse community has cultivated my passion for bridging technological gaps to drive positive change. I'm grateful for the exposure, which instilled a deep appreciation for collaboration and allowed me to effectively hone my leadership and communication skills to navigate diverse perspectives. <br/><br/>Currently pursuing a degree in computer science with a focus in software engineering I'm driven to leverage technology as a tool to solve real-world problems faced by organizations and communities. My goal is to apply the engineering principles I learned through my coursework to innovate solutions that address complex challenges.</span>
        </div>
    </section>
    
    
  )
}

export default About
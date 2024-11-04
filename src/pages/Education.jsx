import React from 'react'
import Card from '../components/Card'

const Education = () => {
    let message = "~ Education "
    return (
  
  
      <section className='w-full h-full flex flex-col items-center justify-start '>
  

        <div className=' mt-5'> 
            <span className='courier-prime-regular font-bold tracking-tight  text-teal-400'> {message}</span>
        </div>

        <div className=' w-full h-1/2 m-7 '>
          <Card heading={"Arizona State University"} message={"B.S. Computer Science Concentration in SWE"} border={0} year={"Expected Graduation 2026"}/>
          <span className='ml-8 flex flex-wrap'> Relevant courses: Discrete Math, Calculus I,II,III, Data Structures & Algorithims, Digital Desgin,  </span>
        </div>
  
  
      </section>
  )
}

export default Education
import React from 'react'
import '../App.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiHandshake } from "react-icons/si";


let message = "~ \> Hello👋,"
const Home = () => {
  return (
    <>

      <section className='w-full h-full'>

        <div className=' m-5 space-y-3  mt-24 md:mt-52'>
          <span className='monteserrat text-2xl font-bold courier-prime-regular ' style={{}}> {message} </span>
          <div>
            <h1 className=' text-4xl montserrat font-bold tracking-normal' style={{ color: '#EB5E28' }} ><span style={{ color: '#CCC5B9' }}>I'm </span>Ali Kefel </h1>
            <span className='text-xl tracking-tighter mt-2 ' style={{ color: '#FFFCF2' }}> Computer Science Student @ Arizona State University </span>
          </div>
          <div className='flex flex-row'>
            <a href="mailto:alikefel114@gmail.com" className='text-gray-300 font-semibold tracking-tight hover:underline'>
              alikefel114@gmail.com 
            </a>
            <span className='text-gray-300 font-semibold tracking-tight mx-2'>|</span>
            <a href="mailto:akefel@asu.edu" className='text-gray-300 font-semibold tracking-tight hover:underline'> akefel@asu.edu </a>
          </div>
        </div>


        <div className='m-5 h-1/2 flex flex-col justify-between'>

          <div className=' flex flex-row space-x-2'>
            <a href='https://www.linkedin.com/in/ali-kefel/'> <FaLinkedin className='text-5xl text-blue-600 hover:-translate-y-1 hover:cursor-pointer'  /> </a>
            <a href='https://github.com/AliKefel'> <FaGithubSquare className='text-5xl  text-green-500 hover:-translate-y-1 hover:cursor-pointer' /> </a>
            <a href='https://leetcode.com/ali_kefel/'> <SiLeetcode className='text-5xl  text-orange-500 hover:-translate-y-1 hover:cursor-pointer'/> </a>
            <a href='https://app.joinhandshake.com/stu/users/46595477'> <SiHandshake className='text-5xl  text-yellow-500 hover:-translate-y-1 hover:cursor-pointer'/> </a>

          </div >

          

        </div>

      </section>

    </>
  )
}

export default Home
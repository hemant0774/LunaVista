import React from 'react'
import { motion } from "motion/react"

const Aboutus = () => {
  return (
    <div className='w-screen min-h-[60vh] bg-[#100821] text-[#d5d2be] flex flex-col items-start justify-start pb-32' id='about'>
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:0.5,type:"keyframes"}}>
        <div className="w-full px-10 py-6 border-b border-white text-[#d5d2be]">
            <h1 className="lg:text-5xl text-4xl">About us</h1>
        </div>
        <div className='w-full flex lg:flex-row flex-col items-center justify-center'>
            <div className='lg:w-[30%] w-full flex items-center justify-center'>
                <img src="/images/sun_abt.png" alt="sun" className='w-[400px] h-full'/>
            </div>
            <div className='lg:w-[70%] w-full flex items-center justify-center'>
                <p className='lg:text-4xl text-2xl w-[80%]'>
                At Luna Vista, we bridge the cosmos and your journey through life. Our mission is to provide personalized astrological insights, guiding you to unlock the power of the stars. With a blend of tradition and modernity, we make astrology accessible, empowering, and meaningful for everyone. 🌙✨
                </p>
            </div>
        </div>
        </motion.div>
    </div>
  )
}

export default Aboutus

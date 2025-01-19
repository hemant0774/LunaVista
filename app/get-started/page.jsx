'use client'
import React from 'react'
import { motion } from "motion/react"
import ChatBot from '@/components/fragments/ChatBot'
import { FaArrowRightLong } from 'react-icons/fa6'

const ChatBotSection = () => {
  return (
    <div className='min-h-screen w-screen m-0 p-0 bg-[#100821] text-[#d5d2be] flex flex-col items-center justify-start'>
        <div className='w-full px-12 py-4'>
            <h1 className='text-3xl'>
                LunaVista.
            </h1>
        </div>
        <div className='flex lg:flex-row flex-col items-center justify-center h-full py-10 lg:px-10 px-4 w-full gap-2'>
            <motion.div className='border-white border h-full flex flex-col items-center justify-start lg:w-[50%] w-full p-4' whileHover={{borderRadius:30}}>
                <h1 className='lg:text-6xl text-3xl'>
                    Your Personal Spiritual Advisor
                </h1>
                <ChatBot/>
            </motion.div>
            <motion.div className='border-white border h-full flex flex-col items-center justify-between lg:w-[50%] w-full p-4' whileHover={{borderRadius:30}}>
                <h1 className='lg:text-8xl text-4xl'>
                    Get Your Kundli Generated within Minutes !
                </h1>
                <div className='flex lg:flex-row flex-col lg:items-start items-center justify-between lg:px-20 px-3 mt-5'>
                    <img src="/images/kundli.svg" alt="kundli" className='h-[200px] w-auto' />
                    <p className='lg:w-[40%] w-full text-xl'>
                        Answers to
                        Everything you need to know about yourself.
                    </p>
                </div>
                <motion.a className='mt-10 bg-white text-black rounded-xl px-10 py-4 text-2xl flex items-center gap-3' whileHover={{gap:"50px"}} href='/get-started/generate-kundli'>
                    Let's Start <FaArrowRightLong/>
                </motion.a>
            </motion.div>
        </div>
    </div>
  )
}

export default ChatBotSection

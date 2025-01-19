import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='w-screen h-fit text-[#d5d2be] flex lg:flex-row flex-col items-center justify-between lg:px-20 px-3 py-10 bg-black' id='footer'>
        <div className='flex flex-col'>
            <h1 className='lg:text-7xl text-5xl'>
                Guided by the cosmos,<br /> inspired by you.
            </h1>
            <div className='flex gap-3 text-3xl pt-5'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaYoutube/>
            </div>
        </div>
        <div className='flex items-center lg:justify-end justify-start lg:w-fit w-full lg:mt-0 mt-10'>
            <ul className='flex flex-col gap-2 items-start justify-center lg:w-fit text-lg'>
            <li className='text-2xl underline flex items-end'>
                LunaVista. <MdArrowOutward className='text-4xl'/>
            </li>
            <a href='/'>
                Home
            </a>
            <a href='#footer'>
                Contact
            </a>
            <a href='#about'>
                About us
            </a>
            <a href='/get-started'>
                Explore
            </a>
            </ul>
        </div>
    </div>
  )
}

export default Footer

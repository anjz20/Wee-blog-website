import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary'>
    <div className='flex flex-col md:flex-row items-start justify-betweenbgap-10 py-10 border-b border-gray-500/30 text-gray-500'>
        <div>
            <img src={assets.logo} alt="logo" className='w-32 sm:w-44 ' />
            <p className='max-w-[410px] mt-6 text-gray-800/80'>Get the latest blogs, writing prompts, and exclusive tips delivered straight to your inbox. No spam, just thoughtful content you’ll love.</p>
        </div>
        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
        {footer_data.map((section, index)=>(
            <div key={index}>
                <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                <ul className='text-sm space-y-1'>
                    {section.links.map((link, i)=> (
                        <li key={i}>
                            <a href="#" className='hover:underline transition text-gray-800/80'>{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        </div>
    </div>
    <p className='py-4 text-center text-sm md:text-base text-gray-800/80'>
    Copyright 2025© WeeBlog - All Right Reserved.
    </p>
    </div>
  )
}

export default Footer


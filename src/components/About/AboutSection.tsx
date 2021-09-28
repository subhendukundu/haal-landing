import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutSection() {
    return (
        <div
            style={{
                backgroundImage: `url('images/background.svg')`
            }}
            className='px-7 sm:px-20 lg:px-42 md:px-20 pt-5 md:pt-8'
        >
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center text-gray-800'>
                    <p className='text-xl md:text-2xl font-semibold'>About Us</p>
                    <p className='pt-5 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rem enim unde excepturi eius ipsam totam possimus minima magnam inventore? Cupiditate quam hic rem voluptatem ipsa adipisci quisquam! Provident, ipsa!</p>
                </div>
                <div className='mt-12 flex flex-col items-center justify-center text-gray-800'>
                    <p className='text-xl md:text-2xl font-semibold'>Our Misson</p>
                    <p className='text-xs md:text-sm mt-1'>We are your first investors!</p>
                    <p className='pt-5 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rem enim unde excepturi eius ipsam totam possimus minima magnam inventore? Cupiditate quam hic rem voluptatem ipsa adipisci quisquam! Provident, ipsa!</p>
                </div>
                <div className='mt-12 flex flex-col items-center justify-center text-gray-800'>
                    <p className='text-xl md:text-2xl font-semibold'>Our Founder</p>
                    <p className='text-xs md:text-sm mt-1'>A man with vision!</p>
                    <p className='pt-5 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rem enim unde excepturi eius ipsam totam possimus minima magnam inventore? Cupiditate quam hic rem voluptatem ipsa adipisci quisquam! Provident, ipsa!</p>
                </div>
                <div className='my-10 mt-16 lg:my-28'>
                    <Link className='text-sm font-semibold underline' to='/contact'>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}

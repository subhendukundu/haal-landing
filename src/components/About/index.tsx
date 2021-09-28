import React from 'react'
import AboutSection from './AboutSection'
import ReturnArrow from '../ReturnArrow'


export default function About() {
    return (
        <>
            <div
                style={{
                    backgroundImage: `linear-gradient( rgba(58, 58, 58, 0.300), rgba(58, 58, 58, 0.300)) ,url('bg.jpg')`,
                }}
                className='mt-16 relative pages-bg flex justify-center bg-gray-100 bg-center bg-cover'
            >
                <ReturnArrow to='/' color="#FFF" />
                <div className='flex flex-col h-full justify-center pb-20  items-center text-white font-semibold'>
                    <p className='text-xl sm:text-2xl md:text-3xl'>About Us</p>
                    <p className='text-gray-100 text-sm md:text-base'>About Higgle Company</p>
                </div>
            </div>
            <AboutSection />
        </>
    )
}

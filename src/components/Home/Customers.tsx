import React from 'react'

import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar'
import { AiOutlineStar } from '@react-icons/all-files/ai/AiOutlineStar'

export default function Customers() {
    return (
        <div
            style={{
                backgroundImage: `url('images/background.svg')`
            }}
            className='flex flex-col items-center bg-gray-200 justify-center text-center px-4 md:px-20 py-10 md:py-28 relative z-10 customers'>
            <p className='text-2xl font-bold sm:text-3xl md:text-4xl' >What Our Customers Are Saying</p>
            <p className='flex my-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus consectetur incidunt cumque labore totam facilis voluptate! Pariatur minima sapiente soluta laborum architecto ipsa id!</p>
            <div className='mt-10 flex flex-col md:flex-row px-20'>
                <div className='relative rounded-sm shadow-lg bg-white w-72 h-72 flex flex-col items-center'>
                    <img className='absolute -top-10 rounded-full w-24 h-24' src="/images/path1.svg" alt="" />
                    <div className='mt-14' >
                        <p className='font-semibold text-xl' >Woodrow Niew</p>
                        <div className='flex items-center justify-center mt-1'>
                            <AiFillStar color='#FFD700' />
                            <AiFillStar color='#FFD700' />
                            <AiFillStar color='#FFD700' />
                            <AiFillStar color='#FFD700' />
                            <AiFillStar color='#FFD700' />
                        </div>
                        <p className='px-10 mt-5  text-lg' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, cupiditate?</p>
                    </div>
                </div>
                <div className='relative rounded-sm my-20 md:my-0 md:mx-10 shadow-lg bg-white h-72 w-72 flex flex-col items-center'>
                    <img className='absolute -top-10 rounded-full w-24 h-24' src="/images/path2.svg" alt="" />
                    <div className='mt-14' >
                        <p className='font-semibold text-2xl' >Woodrow Niew</p>
                        <div className='flex items-center justify-center mt-1'>
                            <AiFillStar color='#FFD700' />
                            <AiFillStar color='#FFD700' />
                            <AiFillStar color='#FFD700' />
                            <AiFillStar color='#FFD700' />
                            <AiOutlineStar color='#FFD700' />
                        </div>
                        <p className='px-10 mt-5  text-lg' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, cupiditate?</p>
                    </div>
                </div>
                <div className='relative rounded-sm shadow-lg bg-white h-72 w-72 flex flex-col items-center'>
                    <img className='absolute -top-10 rounded-full w-24 h-24' src="/images/path3.svg" alt="" />
                    <div className='mt-14' >
                        <p className='font-semibold text-2xl' >Woodrow Niew</p>
                        <div className='flex items-center justify-center mt-1'>
                            <AiFillStar color='#FFD700' />
                            <AiFillStar color='#FFD700' />
                            <AiFillStar color='#FFD700' />
                            <AiFillStar color='#FFD700' />
                            <AiFillStar color='#FFD700' />
                        </div>
                        <p className='px-10 mt-5  text-lg' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, cupiditate?</p>
                    </div>
                </div>
            </div>
            <a href="www.google.com" className='mt-16 font-semibold text-blue-800'>Read More Reviews on</a>
            <div className='flex items-center justify-between px-5 mt-10'>
                <a href="https://www.apple.com/store">
                    <img src="/images/appstore.png" alt="appstore" className='w-28 mr-5 md:w-40' />
                </a>
                <a href="https://play.google.com/">
                    <img src="/images/googleplay.png" alt="playstore" className='w-28 ml-5 md:w-40' />
                </a>
            </div>
        </div>
    )
}

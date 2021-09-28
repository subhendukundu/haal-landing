import React from 'react'
import { FaPaperPlane } from '@react-icons/all-files/fa/FaPaperPlane'
import MiniFooter from './MiniFooter'



export default function Footer() {
    return (
        <>
            <div style={{
                backgroundImage: `url('images/background.svg')`,
                backgroundColor: `#222426`
            }}
                className=' bg-cover text-white flex flex-col items-center justify-between text-center px-4 md:px-10 md:pt-52 md:pb-28'>
                <div className='mb-32 px-5'>
                    <p className='text-2xl mt-10 font-bold sm:text-3xl md:text-4xl' >See What's Next</p>
                    <p className='flex my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus</p>
                    <div className='flex items-center justify-between bg-white rounded-md w-full'>
                        <input type="text" className='border-0 outline-none w-full text-black px-4' placeholder='Email' />
                        <span
                            style={{ backgroundImage: `linear-gradient(to bottom right, #FD0202 ,#FF7600,#f0951f)` }}
                            className='px-5 py-2 rounded-r-md'
                        >
                            <FaPaperPlane size={24} />
                        </span>
                    </div>
                </div>
            </div>
            <MiniFooter/>
        </>
    )
}

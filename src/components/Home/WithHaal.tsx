import React from 'react'

export default function WithHaal() {
    return (
        <div style={{
            backgroundImage: `url('images/background.svg')`,
        }} className='flex flex-col relative z-10 items-center justify-center px-5 md:px-32 pt-8 md:pt-16 bg-gray-200 withhaal'>
            <div
                className='duration-500 bg-gray-200'>
                <div className=' flex flex-col items-center my-8 mb-3 w-full justify-center text-center'>
                    <p className='text-black text-2xl font-bold sm:text-3xl md:text-4xl' >What I can do with Haal ?</p>
                    <p className='flex mt-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus consectetur incidunt cumque labore totam facilis voluptate! Pariatur minima sapiente soluta laborum architecto ipsa id!</p>
                </div>
                <div
                    className={`transition flex items-center justify-center duration-500 flex-col w-full md:flex-row text-center my-10`}>
                    <div className='duration-500 flex flex-col items-center justify-center md:w-80 w-96'>
                        <img src="/images/grp1.svg" alt="" />
                        <p className='font-semibold text-2xl' >Invoice and Offer Generator</p>
                        <p className='text-center mt-4 px-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque</p>
                    </div>
                    <div className='duration-500 flex flex-col items-center justify-center md:w-80 w-96 md:mx-10 my-3 md:my-0 '>
                        <img src="/images/grp2.svg" alt="" />
                        <p className='font-semibold text-2xl' >Invoice and Offer Generator</p>
                        <p className='text-center mt-4 px-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque</p>
                    </div>
                    <div className='duration-500 flex flex-col items-center justify-center md:w-80 w-96 '>
                        <img src="/images/grp3.svg" alt="" />
                        <p className='font-semibold text-2xl' >Invoice and Offer Generator</p>
                        <p className='text-center mt-4  px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

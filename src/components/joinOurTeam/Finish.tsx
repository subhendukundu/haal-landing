import React from 'react'
import { Link } from 'react-router-dom'

export default function Finish() {
    return (
        <div className='flex flex-col items-center justify-center' >
            <div className='join_our_team relative flex items-center justify-center border-6 border-white rounded-lg shadow-lg'>
                <img src="https://i2.wp.com/xaverians.org.uk/wp-content/uploads/2020/02/Womens-Wellbeing-scaled.jpg?resize=2000%2C1200&ssl=1" alt="join our team" />
                <p className='absolute mt-20 text-center text-2xl sm:text-3xl  text-white font-bold'>
                    Thank you for submiting <br /> your CV
                </p>
            </div>
            <p className='text-gray-200 text-sm md:text-base text-center px-5 lg:px-70 my-3' >We can't wait to meet you and eat Courtney's awesome mom cookies together</p>
            <Link to='/' className='mt-16 font-bold text-white underline'>
                Return to Home Page
            </Link>
        </div>
    )
}

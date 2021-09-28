import React from 'react'
import { Link } from 'react-router-dom'

export default function Member({ member, isMom, center = false }: any) {

    return (
        <Link
            to={{
                pathname: 'member',
                state: {
                    member
                },
            }}
            className='cursor-pointer'
        >
            <div className='flex flex-col items-center justify-between'>
                <div className='transform -rotate-3 relative border-4 h-42 w-37 md:h-45 md:w-42 border-white shadow-lg rounded'>
                    <img className='absolute -top-4 -right-3 rounded-full w-11 h-11' src="/images/path2.svg" alt="" />
                    <img src={isMom ? member.momSrc : member.src} className='h-full' alt="member" />
                </div>
                <div className={`-pr-4 flex flex-col mt-3 ${center && 'text-center'} `} >
                    <p className='font-semibold'>{isMom ? member.momName : member.name}</p>
                    <p className='text-gray-800 text-sm '> {isMom ? member.momPosition : member.position} </p>
                </div>
            </div>
        </Link>
    )
}

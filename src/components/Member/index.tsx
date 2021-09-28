import React from 'react'
import ReturnArrow from '../ReturnArrow'
import Memb from '../Team/Member'

export default function Member({ member }: any) {
    return (
        <div className='relative my-16 pt-20 mb-20  px-4 bg-gray-100 sm:px-20 lg:px-42 md:px-20 pt-5 ' >
            <ReturnArrow to='/team' color='#000' />
            <Memb
                member={member}
                isMom={false}
                center={true}
            />
            <div className='mt-7'>
                {member.info}
            </div>
            <div className='pt-10 flex flex-col items-center justify-center'>
                <p className='text-lg  sm:text-2xl font-semibold'>Don't trust Us?</p>
                <p className='text-gray-700 text-sm md:text-base'>Here is What our moms have to say</p>
            </div>
            <div className='mt-10' >
                <Memb
                    member={member}
                    isMom={true}
                    center={true}
                />
            </div>
            <div className='mt-7'>
                {member.info}
            </div>
        </div>
    )
}

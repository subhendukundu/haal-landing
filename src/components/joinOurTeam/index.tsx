import React, { useEffect, useState } from 'react'
import ReturnArrow from '../ReturnArrow'
import Finish from './Finish'
import JoinForm from './JoinForm'
import Rols from './Rols'


export default function JoinOurTeam() {

    const [role, setRole]: any = useState('')
    const [next, setNext]: any = useState(false)
    const [finish, setFinish]: any = useState(false)

    useEffect(() => {
        role && setNext(true)
    }, [role, next])

    return (
        <div
            style={{
                backgroundImage: `url('images/background.svg')`,
                backgroundColor: `#222426`
            }}
            className='relative mt-16 px-4 sm:px-20 lg:px-42 md:px-20 pt-5 md:pt-8'
        >
            <div className={`flex flex-col py-12  ${finish ? 'pb-10' : 'pb-30'} `}>
                {
                    !finish && <div className='flex pb-5 md:pb-10 md:items-center flex-col text-white'>
                        <p className='text-lg sm:text-2xl md:text-3xl font-semibold'>Join our team</p>
                        <p className='text-gray-100 text-sm md:text-base'>Our team is rapidly growing and we are currently seeking new members to help contribute to our success</p>
                    </div>
                }
                <ReturnArrow to='/' color='#FFF' />
                {
                    !next ? <Rols setRole={setRole} role={role} /> : !finish && <JoinForm setFinish={setFinish} />
                }
                {
                    finish && <Finish />
                }
            </div>
        </div>
    )
}

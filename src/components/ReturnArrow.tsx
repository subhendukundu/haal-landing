import React from 'react'
import { RiArrowLeftSLine } from '@react-icons/all-files/ri/RiArrowLeftSLine'
import { Link } from 'react-router-dom'

export default function ReturnArrow({ to,color }: any) {
    return (
        <Link
            to={to}
            className='flex md:hidden sm:text-6xl text-4xl absolute left-0 top-3'
        >
            <RiArrowLeftSLine color={color} />
        </Link>
    )
}

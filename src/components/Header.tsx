import React, { useState, useEffect } from 'react'

import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
import { GrClose } from '@react-icons/all-files/gr/GrClose'
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [menu, setMenu] = useState(false);

    const pathname = useLocation().pathname.replace(/[^\w\s]/gi, '')

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden'

        } else document.body.style.overflow = 'auto'
    }, [menu])


    return (
        <div className='flex items-center justify-between h-16 sm:px-10 lg:px-20 px-6 bg-gray-100 border-b border-orange-600 fixed w-full top-0 z-50' >
            <div className='flex items-center justify-center'>
                <Link to='/' className='flex items-center mr-5 lg:mr-16' style={{ fontFamily: 'Segoe UI' }} >
                    <img src="/images/haalLeft.svg" alt="haal logo" className='w-9' />
                    <p className='text-2xl font-semibold ml-2' >Haal</p>
                </Link>
                <ul className='hidden md:flex items-center font-semibold'>
                    <Link to='/' className={`${pathname === '' && 'text-red-700'} hover:text-red-700 mx-3`} >Home</Link>
                    <Link to='/about' className={`${pathname === 'about' && 'text-red-700'} hover:text-red-700 mx-3`} >About Us</Link>
                    <Link to='/team' className={`${pathname === 'team' ? 'text-red-700' : pathname === 'member' ? 'text-red-700' : pathname === 'joinOurTeam' && 'text-red-700'} hover:text-red-700 mx-3`} >Team</Link>
                    <Link to='/contact' className={`${pathname === 'contact' && 'text-red-700'} hover:text-red-700 mx-3`} >Contact Us</Link>
                    <Link to='/faq' className={`${pathname === 'faq' && 'text-red-700'} hover:text-red-700 mx-3`} >FAQ</Link>
                </ul>
            </div>
            <div className='hidden md:flex items-center' >
                <a href="https://play.google.com/" target="blank">
                    <img src="/images/android.svg" alt="android" className='w-12 cursor-pointer mr-4' />
                </a>
                <a href="https://www.apple.com/store" target="blank">
                    <img src="/images/apple.svg" alt="apple" className='w-12 cursor-pointer' />
                </a>
            </div>
            <button onClick={() => setMenu(true)} className='md:hidden flex text-2xl rounded-md p-3' >
                <GiHamburgerMenu />
            </button>
            <div className={`${menu ? 'w-full right-0' : 'w-0 -right-20'} fixed bg-white top-0 bottom-0 h-screen duration-500 ease-in-out font-bold `}>
                <div className='flex flex-col items-start font-semibold justify-center text-center w-full h-full border relative'>
                    <Link to='/' className='mx-10 p-3 cursor-pointer my-2  text-3xl' >Home</Link>
                    <Link to='/about' className='mx-10 p-3 cursor-pointer my-2 text-3xl' >About</Link>
                    <Link to='/team' className='mx-10 p-3 cursor-pointer my-2 text-3xl' >Team</Link>
                    <Link to='/faq' className='mx-10 p-3 cursor-pointer my-2 text-3xl' >FAQ</Link>
                    <Link to='/contact' className='mx-10 p-3 cursor-pointer my-2 text-3xl' >Contact Us</Link>
                    <button onClick={() => setMenu(false)} className='absolute text-2xl font-bold top-2 right-8 rounded-md p-3' >
                        <GrClose />
                    </button>
                    <p className='absolute bottom-10 left-10 text-black text-2xl font-bold'>Haal</p>
                </div>
            </div>
        </div>
    )
}

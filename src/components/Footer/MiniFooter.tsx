import React from 'react'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt'

export default function MiniFooter() {
    return (
        <>
          <div
                style={{
                    backgroundImage: `linear-gradient( rgba(58, 58, 58, 0.150), rgba(58, 58, 58, 0.150)) ,url('images/background.svg')`
                }}
                className='md:px-20 p-5 md:flex pl-5 pt-10 bg-cover text-white backdrop-brightness-200 pb-10 bg-black justify-between'>
                <div className='flex'>
                    <div className='flex flex-col items-start mr-20'>
                        <p className='mb-5'>COMPANY INFO</p>
                        <p className='text-sm mt-1' >About Us</p>
                        <p className='text-sm mt-1' >Diversity & Accesibility</p>
                        <p className='text-sm mt-1' >Privacy Policy</p>
                        <p className='text-sm mt-1' >Term & Condition</p>
                        <p className='text-sm mt-1' >Sitemap</p>
                    </div>
                    <div className='flex flex-col items-start'>
                        <p className='mb-5'>CUSTOMER SUPPORT</p>
                        <p className='text-sm mt-1'>Help</p>
                        <p className='text-sm mt-1'>FAQ</p>
                    </div>
                </div>
                <div className='flex flex-col mt-10 md:mt-0 justify-between'>
                    <div className='flex flex-col'>
                        <p className='mb-5'>CONTACT</p>
                        <div className='flex items-center'>
                            <FaHome />
                            <p className='text-sm mt-1 ml-2' >bedfordshire379 Merz Groves Apt. 551</p>
                        </div>
                        <div className='flex items-center my-1' >
                            <FaEnvelope />
                            <p className='text-sm mt-1 ml-2' >Adrianna.Medhurst@yahoo.com</p>
                        </div>
                        <div className='flex items-center'>
                            <FaPhoneAlt />
                            <p className='text-sm mt-1 ml-2' >427-183-6418</p>
                        </div>
                    </div>
                    <div className='flex flex-col mt-14'>
                        <p>FOLLOW US</p>
                        <div className='flex mt-3'>
                            <img className='mr-1' src="/images/group_42.svg" alt="social media" />
                            <img className='mx-1' src="/images/group_43.svg" alt="social media" />
                            <img className='mx-1' src="/images/group_44.svg" alt="social media" />
                            <img className='mx-1' src="/images/group_45.svg" alt="social media" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex bg-black border-t text-white border-gray-300 md:px-20 p-4 px-2 items-center justify-between w-full' >
                <img src="/images/Higgle-logo.svg" alt="higgle" className='w-16 md:flex md:w-20' />
                <p className='text-xs text text-right pr-3'>
                    Copyright 2021 Higgle. All rights reserved
                </p>
            </div>  
        </>
    )
}

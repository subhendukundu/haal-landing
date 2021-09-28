import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReturnArrow from '../ReturnArrow'
import Sent from './Sent'

export default function Contact() {

    const [fullName, setFullName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [sent, setSent] = useState(false)


    const postForm = (e: any) => {
        e.preventDefault()
        if (!fullName) return
        if (!emailAddress) return
        if (!subject) return
        if (!message) return
        setSent(true)
        scrollTo(0, 0)
        setTimeout(() => setSent(false), 2500);
        
        setFullName('')
        setEmailAddress('')
        setSubject('')
        setMessage('')
    }


    return (
        <div
            style={{
                backgroundImage: `url('images/background.svg')`,
                backgroundColor: `#222426`
            }}
            className='relative mt-16 px-4 sm:px-20 lg:px-42 md:px-20 pt-5 md:pt-8'
        >
            {
                sent && <Sent />
            }
            <ReturnArrow to='/' color='#FFF' />
            <div className='flex flex-col py-12'>
                <div className='flex pb-5 px-3 md:pb-10 md:items-center flex-col text-white'>
                    <p className='text-lg sm:text-2xl md:text-3xl font-semibold'>Get in touch</p>
                    <p className='text-gray-100 text-sm md:text-base'>Send a message and we will responde as soon as possible</p>
                </div>
                <form onSubmit={postForm} className='w-full md:w-10/12 xl:w-8/12 p-2 flex flex-col items-center justify-center mx-auto'>
                    <div className='pt-2 border-b border-gray-300 w-full'>
                        <div className='mb-5'>
                            <input
                                type="text"
                                placeholder='Full Name'
                                className='rounded w-full px-5 py-2.5'
                                value={fullName}
                                onChange={({ target }) => setFullName(target.value)}
                            />
                        </div>
                        <div className='mb-5'>
                            <input
                                type="text"
                                placeholder='Email Adress'
                                className='rounded w-full px-5 py-2.5'
                                value={emailAddress}
                                onChange={({ target }) => setEmailAddress(target.value)}
                            />
                        </div>
                    </div>
                    <div className='py-5 w-full'>
                        <div className='mb-5'>
                            <input
                                type="text"
                                placeholder='Subject'
                                className='rounded w-full px-5 py-2.5'
                                value={subject}
                                onChange={({ target }) => setSubject(target.value)}
                            />
                        </div>
                        <div className='mb-5 w-full'>
                            <textarea
                                cols={30}
                                rows={6}
                                placeholder="Message"
                                className='rounded w-full px-5 py-2.5'
                                value={message}
                                onChange={({ target }) => setMessage(target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center justify-between sm:px-14 text-black sm:text-white w-full'>
                        <Link to='/' className='hidden sm:flex' >Cancel</Link>
                        <button
                            style={{
                                backgroundImage: `url('images/liquid.png')`
                            }}
                            className='bg-white w-full sm:w-auto text-black sm:text-white sm:bg-transparent liquid px-10 py-2 border-2 border-white rounded-full'
                        >
                            Submit Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

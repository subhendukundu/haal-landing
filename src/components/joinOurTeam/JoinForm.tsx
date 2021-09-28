import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function JoinForm({ setFinish }: any) {

    const [message, setMessage]: any = useState('')
    const [file, setFile]: any = useState('')
    const fileRef: any = useRef(null)


    const postForm = (e: any) => {
        e.preventDefault()
        if (!message) return
        if (!file) return
        //API CALL
        setFinish(true)
    }

    return (
        <form onSubmit={postForm} className='w-full md:w-10/12 xl:w-8/12 p-2 flex flex-col items-center justify-center mx-auto'>
            <div className='pt-2 w-full'>
                <div className='mb-5'>
                    <textarea
                        className='rounded w-full px-5 py-2.5'
                        placeholder='Message'
                        cols={30}
                        rows={7}
                        value={message}
                        onChange={({ target }) => setMessage(target.value)}
                    ></textarea>
                </div>
                <div className='mb-5' >
                    <div className='flex items-center justify-between bg-white rounded'>
                        <button onClick={() => fileRef.current.click()} className='text-sm md:text-base w-45 cursor-pointer bg-gray-200 text-gray-600 px-5 py-3 rounded-t rounded-b'>
                            Choose file
                        </button>
                        <div className='w-full px-5 text-gray-800 bg-white'>
                            {
                                file && file
                            }
                        </div>
                    </div>
                </div>
                <input
                    ref={fileRef}
                    className='hidden'
                    type="file"
                    placeholder='Email Adress'
                    value={file}
                    onChange={({ target }) => setFile(target.value)}
                />
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
    )
}

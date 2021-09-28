import React, { useState, useEffect } from 'react'


export default function GetIt() {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            style={{
                backgroundImage: `linear-gradient( rgba(58, 58, 58, 0.300), rgba(58, 58, 58, 0.300)) ,url('bg.jpg')`,
                backgroundPositionY: `-${offsetY ? 80 + offsetY * 0.13 : 80}px`,
                height: `120vh`
            }}
            className=' w-full bg-center bg-cover bg-fixed bg-gray-100 font-normal h-full duration-100'>
            <div className='w-full transform duration-100'  >
                <div
                    className='flex duration-100 flex-col h-screen w-11/12 pt-20 md:pt-14 md:w-full items-center justify-between m-auto'
                >
                    <div className='flex flex-col items-center justify-center text-center mt-10 md:mt-20' >
                        <p className='text-white text-4xl md:text-6xl font-semibold mb-5 flex justify-center'>Simplify business <br /> tasks</p>
                        <p className='text-white md:hidden flex text-xl md:text-2xl' >Work flexibly and keep track of your business with Hall mobile App</p>
                    </div>
                    <div className='flex flex-col mb-20 w-11/12 md:w-8/12 mx-auto text-center '>
                        <p className='text-white w-full justify-center hidden md:flex text-xl mb-4 mx-auto' >Work flexibly and keep track of your business with Hall mobile App</p>
                        <div className='flex items-center justify-center flex-col mx-auto md:flex-row w-10/12'>
                            <button
                                style={{
                                    backgroundImage: `url('images/liquid.png')`
                                }}
                                className='liquid text-black rounded-full font-medium bg-white md:bg-transparent md:text-white border-2 border-white w-full py-2 text-lg md:mx-4 my-2'>Get it on Android</button>
                            <button
                                style={{
                                    backgroundImage: `url('images/liquid.png')`
                                }}
                                className='liquid text-black rounded-full font-medium bg-white md:bg-transparent md:text-white border-2 border-white w-full py-2 text-lg md:mx-4 my-2'>Get it on iOS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

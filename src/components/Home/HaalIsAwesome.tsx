import React, { useState, useEffect } from 'react'



export default function HaalIsAwesome() {
    const [modal, setModal] = useState(false);
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden'

        } else document.body.style.overflow = 'auto'
    }, [modal])

    return <>
        <div style={{
            backgroundImage: `url('images/background.svg')`,
            backgroundColor: `#222426`
        }}
            className='relative flex bg-cover flex-col text-white items-center justify-center text-center md:py-64 px-4 md:px-10 py-10'>
            <p className=' text-2xl font-semibold sm:text-3xl md:text-4xl' >Why Haal is Awesome ?</p>
            <p className='flex my-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus consectetur incidunt cumque labore totam facilis voluptate! Pariatur</p>
            <div className='relative'>
                <img src="/images/video.png" width='420' alt="haal video" className='filter drop-shadow-lg' />
                <div className='whyhaal pt-2 absolute bg-gradient-to-b from-gray-600 via-gray-400 to-gray-100 bg-transparent top-0 w-full text-left ' >
                    <p className='pt-1 pl-5 pb-1' >Why Haal is Awesome?</p>
                </div>
                <div className='absolute top-1/3 h-screen w-full'>
                    <button onClick={() => setModal(true)} className='mx-auto w-24 h-24 rounded-full  text-white duration-500 ease-in-out'>
                        <img
                            src="/images/play.svg"
                            alt="play"
                            className='filter brightness-125 hover:brightness-150 duration-150' />
                    </button>
                </div>
            </div>
        </div>
        <div onClick={() => setModal(false)} className={`${modal ? 'inset-0 w-screen h-screen' : 'top-full -left-full  w-0 h-0'} fixed flex items-center z-50 justify-center bg-gray-900 bg-opacity-90 duration-500 ease-in-out`}>
            <iframe
                className='mx-auto'
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/lj62iuaKAhU${modal && '?autoplay=1'}`}
                title="YouTube video player"
                rameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </div>
    </>
}
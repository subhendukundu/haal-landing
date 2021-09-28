import React from 'react'

export default function Rols({ role, setRole }: any) {
    return (
        <div>
            <p className='text-base sm:text-xl text-white md:text-2xl font-semibold md:text-center'>Choose your Role</p>
            <div className='w-full  xl:w-8/12 mx-auto mt-6' >
                <div className=' grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center'>
                    <div onClick={() => setRole('Graphic Designer')} className='flex justify-center items-center mx-auto cursor-pointer rounded bg-white p-8 px-16 w-40 md:w-42 md:h-26 h-25 lg:h-auto lg:w-auto'>
                        <div className='flex flex-col justify-center items-center text-base sm:text-lg text-center'>
                            <span>Graphic</span>
                            <span>Designer</span>
                        </div>
                    </div>
                    <div onClick={() => setRole('Bakcend Developer')} className='flex justify-center items-center mx-auto cursor-pointer rounded bg-white p-8 px-16 w-38 md:w-42 md:h-26 h-25 lg:h-auto lg:w-auto'>
                        <div className='flex flex-col justify-center items-center text-base sm:text-lg text-center'>
                            <span>Bakcend</span>
                            <span>Developer</span>
                        </div>
                    </div>
                    <div onClick={() => setRole('Marketing Manager')} className='flex justify-center items-center mx-auto cursor-pointer rounded bg-white p-8 px-16 w-38 md:w-42 md:h-26 h-25 lg:h-auto lg:w-auto'>
                        <div className='flex flex-col justify-center items-center text-base sm:text-lg text-center'>
                            <span>Marketing</span>
                            <span>Manager</span>
                        </div>
                    </div>
                    <div onClick={() => setRole('Frontend Developer')} className='flex justify-center items-center mx-auto cursor-pointer rounded bg-white p-8 px-16 w-38 md:w-42 md:h-26 h-25 lg:h-auto lg:w-auto'>
                        <div className='flex flex-col justify-center items-center text-base sm:text-lg text-center'>
                            <span>Frontend </span>
                            <span>Developer</span>
                        </div>
                    </div>
                    <div onClick={() => setRole('PHP Developer')} className='flex justify-center items-center mx-auto cursor-pointer rounded bg-white p-8 px-16 w-38 h-25 md:w-42 md:h-26 lg:h-auto lg:w-auto'>
                        <div className='flex flex-col justify-center items-center text-base sm:text-lg text-center'>
                            <span>PHP </span>
                            <span>Developer</span>
                        </div>
                    </div>
                    <div onClick={() => setRole('HR Manager')} className='flex justify-center items-center mx-auto cursor-pointer rounded bg-white p-8 px-16 w-38 h-25 md:w-42 md:h-26 lg:h-auto lg:w-auto'>
                        <div className='flex flex-col justify-center items-center text-base sm:text-lg text-center'>
                            <span>HR </span>
                            <span>Manager</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

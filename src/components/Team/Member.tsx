import React from 'react'
import { Link } from 'react-router-dom'

export default function Member({ member, isMom, center = false }: any) {

    const RandColor: any = () => {
        const letters: string = '0123456789ABCDEF';
        let color: string = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color
    }

    return (
        <Link
            to={{
                pathname: 'member',
                state: {
                    member
                },
            }}
            className='cursor-pointer'
        >
            <div className='flex flex-col items-center justify-between'>
                <div className='transform -rotate-3 relative border-4 h-42 w-37 md:h-45 md:w-42 border-white shadow-lg rounded'>
                    <div className='absolute -top-4 -right-3 rounded-full w-11 h-11' >
                        <svg width="50" height="50" viewBox="0 0 149.701 149.702">
                            <path fill={RandColor()} d="M255.963,244.089c17.889-3.418,38.5-19.644,52.091-5.292,13.555,14.312,5.05,41.09,2.035,62.439-2.358,16.7-6.538,33.134-17.117,44.36-10.011,10.622-23.639,13.113-37.008,13.069-13.322-.044-26.017-3.945-36.807-13.311-13.213-11.469-29.145-24.565-29.355-44.119-.211-19.624,15.11-33.8,28.393-45.271,10.977-9.482,24.406-9.324,37.768-11.877" transform="translate(-181.8 -224.96)" />
                        </svg>
                    </div>
                    <img src={isMom ? member.momSrc : member.src} className='h-full' alt="member" />
                </div>
                <div className={`-pr-4 flex flex-col mt-3 ${center && 'text-center'} `} >
                    <p className='font-semibold'>{isMom ? member.momName : member.name}</p>
                    <p className='text-gray-800 text-sm '> {isMom ? member.momPosition : member.position} </p>
                </div>
            </div>
        </Link>
    )
}

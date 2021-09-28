import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReturnArrow from '../ReturnArrow'
import Member from './Member'

export default function Team() {

    const [members, setMembers]: any = useState([])

    useEffect(() => {


        setMembers([
            {
                name: 'Courtney Dash',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod maxime nam omnis veniam laboriosam autem incidunt quos facilis, quae nemo voluptates voluptatum, aliquid possimus. Dolores repellendus ut excepturi amet.',
                src: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                position: 'Founder',
                momName: 'Courtney mom',
                momInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod maxime nam omnis veniam laboriosam autem incidunt quos facilis, quae nemo voluptates voluptatum, aliquid possimus. Dolores repellendus ut excepturi amet.',
                momSrc: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                momPosition: 'Amazing mom'
            },
            {
                name: 'Courtney Dash',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod maxime nam omnis veniam laboriosam autem incidunt quos facilis, quae nemo voluptates voluptatum, aliquid possimus. Dolores repellendus ut excepturi amet.',
                src: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                position: 'Co-Founder',
                momName: 'Courtney mom',
                momInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod maxime nam omnis veniam laboriosam autem incidunt quos facilis, quae nemo voluptates voluptatum, aliquid possimus. Dolores repellendus ut excepturi amet.',
                momSrc: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                momPosition: 'Amazing mom'
            },
            {
                name: 'Courtney Dash',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod maxime nam omnis veniam laboriosam autem incidunt quos facilis, quae nemo voluptates voluptatum, aliquid possimus. Dolores repellendus ut excepturi amet.',
                src: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                position: 'Sr Creative Director',
                momName: 'Courtney mom',
                momInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod maxime nam omnis veniam laboriosam autem incidunt quos facilis, quae nemo voluptates voluptatum, aliquid possimus. Dolores repellendus ut excepturi amet.',
                momSrc: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                momPosition: 'Great mom'
            },
        ])
    }, [])

    return (
        <div
            style={{
                backgroundColor: "#F3F4F6"
            }}
            className='relative mt-16 px-4 bg-gray-100 sm:px-20 lg:px-48 pt-5 md:pt-8'
        >
            <ReturnArrow to='/' color='#000' />
            <div className='w-full px-4 pt-12 pb-20 flex flex-col items-center justify-center text-black'>
                <div className='pb-8 flex flex-col items-center justify-center' >
                    <p className='text-lg sm:text-2xl font-semibold'>Meet the Team</p>
                    <p className='text-gray-700 text-sm md:text-base'>Haal Team is awesome</p>
                </div>
                <div className='flex items-center justify-center text-center'>
                    <p className='text-sm text-gray-800'>We are a great team - full of personality minus the ego, We're the wearer o many hats dedicated to helping companies like yours grow.</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-12 mt-14 w-full'>
                    {
                        members.map((members: any) => (
                            <Member
                                key={Math.floor(Math.random() * 500)}
                                member={members}
                                isMom={false}
                            />
                        ))
                    }
                </div>
                <div className='hidden sm:flex flex-col w-full'>
                    <div className='pt-16 flex flex-col items-center justify-center' >
                        <p className='text-lg sm:text-2xl font-semibold'>Don't trust Us?</p>
                        <p className='text-gray-700 text-sm md:text-base'>Here is What our moms have to say</p>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-12 mt-14 w-full'>
                        {
                            members.map((members: any) => (
                                <Member
                                    key={Math.floor(Math.random() * 450)}
                                    member={members}
                                    isMom={true}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='pt-24 flex flex-col items-center justify-center' >
                    <p className='text-lg sm:text-2xl font-semibold'>Our Cultute?</p>
                    <p className='text-gray-700 text-sm md:text-base'>Teamwork makes dream work</p>
                    <p className='text-gray-700 text-sm md:text-base my-10 text-center'>We are a close-knit team of enthuiastic marketers, strategists and designers. Think you'll fit in just fine?</p>
                </div>
                <div className='join_our_team relative flex items-center justify-center border-6 border-white rounded-lg shadow-lg'>
                    <img src="https://i2.wp.com/xaverians.org.uk/wp-content/uploads/2020/02/Womens-Wellbeing-scaled.jpg?resize=2000%2C1200&ssl=1" alt="join our team" />
                    <Link to='joinOurTeam' className='absolute mt-22 text-2xl sm:text-3xl md:text-4xl text-white font-bold underline'>Join Our Team</Link>
                </div>
                <p className='text-gray-700 text-sm md:text-base text-center my-3' >We have cookies from Courtney's awesome mom</p>
            </div>
        </div>
    )
}
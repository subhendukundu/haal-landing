import React from 'react'
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch"
import Question from './Question'
import ReturnArrow from '../ReturnArrow'

export default function FAQ() {
    return (
        <div
            style={{
                backgroundColor: "#F3F4F6"
            }}
            className='relative mt-16 px-4 bg-gray-100 sm:px-20 lg:px-42 md:px-20 pt-5 md:pt-8'
        >
            <ReturnArrow to='/' color='#000' />
            <div className='w-full md:w-10/12 xl:w-8/12 mx-auto py-14 pt-12 pb-58 flex flex-col items-center justify-center text-black'>
                <div className='pb-8 flex flex-col md:items-center justify-center' >
                    <p className='text-lg sm:text-2xl md:text-3xl font-semibold'>Frequently Asked Question</p>
                    <p className='text-gray-700 text-sm md:text-base'>The chances are your question has been already by another curios reader</p>
                </div>
                <div className='flex flex-col mt-1 sm:mt-10 w-full '>
                    <div className='bg-white rounded-full flex items-center justify-between p-3 px-5 sm:p-4.5 sm:px-6'>
                        <AiOutlineSearch className='text-2xl text-gray-600' />
                        <input
                            type="text"
                            placeholder='Search your question'
                            className='w-full px-5 text-sm outline-none'
                        />
                    </div>
                </div>
                <div className='w-full flex flex-col mt-10'>
                    <Question
                        question="Why visit FAQ?"
                        answer="The chances are your question has been asked already by another curios reader"
                        dotColor="bg-red-500"
                    />
                    <Question
                        question="How do I get a refund?"
                        answer=""
                        dotColor="bg-green-500"
                    />
                    <Question
                        question="How do I register"
                        answer=""
                        dotColor="bg-purple-500"
                    />
                    <Question
                        question="How to change my password"
                        answer=""
                        dotColor="bg-yellow-500"
                    />
                    <Question
                        question="Who is Higgle"
                        answer=""
                        dotColor="bg-pink-500"
                    />
                </div>
            </div>
        </div>
    )
}

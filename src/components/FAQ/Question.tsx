import React, { useState } from 'react'
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown"
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp"

export default function Question({ question, answer, dotColor }: any) {

    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <div className='w-full flex border-b border-gray-400 flex-col'>
            <div className='w-full py-1.5 flex items-center justify-between'>
                <div onClick={() => setShowAnswer(prev => !prev)} className='flex items-center justify-center'>
                    <div className={`w-2 h-2 ${dotColor} rounded-full`}></div>
                    <div className='cursor-pointer pl-2'>
                        <p className='font-semibold' >
                            {question}
                        </p>
                    </div>
                </div>
                {
                    showAnswer
                        ? <IoIosArrowUp className='cursor-pointer' onClick={() => setShowAnswer(prev => !prev)} />
                        : <IoIosArrowDown className='cursor-pointer' onClick={() => setShowAnswer(prev => !prev)} />
                }
            </div>
            <div className={`${showAnswer ? 'flex' : 'hidden'} pb-2 text-sm`}>
                {answer}
            </div>
        </div>
    )
}

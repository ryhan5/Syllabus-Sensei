import Image from 'next/image'
import React from 'react'

function CourseItem({course}) {
  return (
    <div className='border rounded-xl hover:shadow-md hover:shadow-red-400 cursor-pointer'>
        <Image src={course?.banner?.url}
        width={500}
        height={150}
        alt='banner'
        className='rounded-t-xl'
        />
        <div className='flex flex-col gap-1 p-2'>
            <h2 className='font-medium'>{course.name}</h2>
            <h2 className='text-[15px] text-gray-400'>{course.author}</h2>
            <div className='flex gap-2'>
                <Image src='/chapter.png'
                alt='chapter'
                width={20}
                height={20}
                />
                <h2 className='text-[15px] text-gray-400'>Chapters</h2>

            </div>
            <h2 className='text-[20px]'>{course?.price}</h2> 
            {/* 'Free':'Paid' */}
        </div>
    </div>
  )
}

export default CourseItem
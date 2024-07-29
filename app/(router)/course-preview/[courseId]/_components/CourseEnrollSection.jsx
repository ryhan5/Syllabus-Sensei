import { Button } from '@/components/ui/button'
import React from 'react'

function CourseEnroll() {
  return (
    <div className='p-3 text-center rounded-sm bg-red-500 '>
      <h2 className='text-[22px] font-bold text-white'>Enroll to the course</h2>

      {/* User has membership and is logged in */}
      <div className='flex flex-col gap-3 mt-3'>
      <h2 className='text-white font-light'>Enroll Now to Start Learning and Building the project</h2>
      <Button className='bg-white text-red-500 hover:bg-white hover:text-red-500'>Enroll now</Button>
      </div>
      {/* User doesn't have membership or is not logggedin */}
      <div className='flex flex-col gap-3 mt-3'>
      <h2 className='text-white font-light'>But Monthly Member and get Access to All the courses</h2>
      <Button className='bg-white text-red-500 hover:bg-white hover:text-red-500'>But Membership at just $2.99 </Button>
      </div>
    </div>
  )
}

export default CourseEnroll
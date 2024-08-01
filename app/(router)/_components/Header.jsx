"use client"
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs';
import { BellDot, Search } from 'lucide-react'
import React from 'react'

function Header() {
  const {user,isLoaded}=useUser();
  return (
    <div className='p-3 bg-white flex justify-between'>
        {/* Search bar */}
        <div className='flex gap-2 border p-2 rounded-md'>
            <Search className='h-5 w-5'/>
            <input type='text' placeholder='Search...' className='outline-none'/>
        </div>
        {/* Get Started Button & bell Icon*/}
        <div className='flex items-center gap-4'>
            <BellDot className='text-gray-500'/>
            {isLoaded&&user
            ?<UserButton/>
            :
            <Button>Get Started</Button>}
        </div>
    </div>
  )
}

export default Header
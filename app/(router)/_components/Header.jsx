"use client";
import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import { BellDot, Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Header() {
  const { user, isLoaded } = useUser();

  return (
    <div className='p-3 bg-white flex justify-between'>
      {/* Search bar */}
      <div className='flex gap-2 border p-2 rounded-md'>
        <Search className='h-5 w-5' />
        <input type='text' placeholder='Search...' className='outline-none' />
      </div>
      {/* Get Started Button & Bell Icon */}
      <div className='flex items-center gap-4'>
        <BellDot className='text-gray-500' />
        {isLoaded && user ? (
          // Example: Replace deprecated afterSignOutUrl with a signOut callback
          <UserButton
            onSignOut={() => {
              router.push('/courses');
            }}
          />
        ) : (
          <Link href={'/sign-in'}>
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;

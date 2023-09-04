"use client"

import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const LeftSidebar = () => {

  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        return (
        <Link href='./'>
          <Image src='' alt='' width={24} height={24} />

          <p className='text-light-1 max-lg:hidden'></p>
        </Link>
        )
      </div>

      <div className='mt-10 px-6'>
        <SignedIn>
          <SignOutButton>
            <div className='flex cursor-pointer gap-4 p-4'>
              <Image src='/assets/logout.svg' alt='logout' width={24} height={24} />

              <p className='text-light-2 max-lg:hidden'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  )
}

export default LeftSidebar

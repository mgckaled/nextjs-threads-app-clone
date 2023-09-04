"use client"

import Image from "next/image"
import Link from "next/link"

function Bottombar() {
  return (
    <section className='bottombar'>
      <div className='bottombar_container'>
        return (
        <Link href='./'>
          <Image src='' alt='' width={16} height={16} className='object-contain' />

          <p className='text-subtle-medium text-light-1 max-sm:hidden'></p>
        </Link>
        )
      </div>
    </section>
  )
}

export default Bottombar

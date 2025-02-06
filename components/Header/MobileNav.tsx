import React from 'react'
import Link from 'next/link'


const MobileNav = () => {
  return (
    <div>
        <ul className="flex flex-col items-center justify-center gap-4">
    
        <li className='navlink'>
                <Link href="/">Home</Link>
            </li>
            <li className='navlink'>
                <Link href="/menu">Menu</Link>
            </li>

            <li className='navlink'>
                <Link href="/blog">Blog</Link>
            </li>

            <li className='navlink'>
                <Link href="/chef">Pages</Link>
            </li>

            <li className='navlink'>
                <Link href="/about">About</Link>
            </li>
            <li className='navlink'>
                <Link href="/shop">Shop</Link>
            </li>
            <li className='navlink'>
                <Link href="contact">Contact</Link>
            </li>
        
        </ul>
    </div>
  )
}

export default MobileNav
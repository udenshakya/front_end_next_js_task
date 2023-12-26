'use client'
import Link from 'next/link';
import React from 'react';
import {useSelector} from 'react-redux'

const Navbar = () => {

  const item = useSelector((state)=>state.cart)

  return (
    <nav className='flex justify-between h-16 items-center font-bold text-xl'>
        <div>
            <Link href={'/'} >Online Store</Link>
        </div>
        <div className='flex gap-2'>
      <Link href={'/cart'} className='bg-red-500  rounded-md'> View Cart </Link>
      <h2>Cart:{item.length}</h2>

        </div>
    </nav>
  );
}

export default Navbar;

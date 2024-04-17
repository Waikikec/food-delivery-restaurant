"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CartIcon from './CartIcon';

const links = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  { id: 3, title: 'Wokring Hours', url: '/' },
  { id: 4, title: 'Contact', url: '/' },
]

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const user = false;

  return (
    <div>
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />

      {open &&
        <div className='bg-red-500 text-white text-2xl uppercase absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center z-10'>
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}

          <Link
            href={user ? "/orders" : "/login"}
            onClick={() => setOpen(false)}
          >
            {user ? "Orders" : "Login"}
          </Link>

          <Link href={'/cart'} onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>

        </div>
      }
    </div>
  )
}

export default Menu
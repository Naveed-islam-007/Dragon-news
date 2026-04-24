import Image from 'next/image';
import React from 'react';
import user from "@/assets/user.png"
import NavLink from './NavLink';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center mt-2'>
            <div></div>
           <ul className='flex gap-5 text-gray-700'>
        <li>
            <NavLink href={'/'}>
                Home
            </NavLink>
        </li>
            <li>
                <NavLink href={'/about'}>
                   ABOUT
                </NavLink>
            </li>
            <li>
                <NavLink href={'/career'}>
                  Career
                </NavLink>
            </li>
           </ul>
           <div>
            <Image src={user} alt='user photo' width={60} height={60}></Image>
             <button className='btn bg-purple-500 text-white'>
                <Link href={'/login'}>Login</Link>
                </button>
           </div>
        </div>
    );
};

export default Navbar;
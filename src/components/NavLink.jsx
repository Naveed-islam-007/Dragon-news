"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname= usePathname();

    const Active= href===pathname;
    return (
        <div>
            <Link href={href} className={`${Active ? "border-b-2 border-b-purple-500":""} font-bold`}>
            {children}
            </Link>
        </div>
    );
};

export default NavLink;
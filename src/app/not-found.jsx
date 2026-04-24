import Link from 'next/link';
import React from 'react';

const NOTFOUND = () => {
    return (
        <div className='h-[80vh] text-5xl font-bold flex flex-col justify-center items-center'>
            THIS PAGE IS NOT AVAILABLE
            <Link href={'/'}>
             <button className='btn'>Back home</button>
            </Link>
        </div>
    );
};

export default NOTFOUND;
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold">Login with</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn'>
                    <FaGoogle />
                    Login with google

                </button>
                <button className='btn'>
                    <FaGithub/>
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default RightSideBar;
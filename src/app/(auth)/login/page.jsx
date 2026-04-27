"use client"

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const {register,handleSubmit}= useForm();

    const handleLogin=(data)=>{
       console.log(data);
    }

 


    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
           <div className='p-4 rounded-xl bg-white w-1/4'>

            <h2 className='text-3xl font-bold text-center'>Login</h2>
            <form className='space-y-4' onSubmit={handleSubmit(handleLogin)} >
               <fieldset className="fieldset">
               <legend className="fieldset-legend">Email</legend>
                <input  type="email" className="input" placeholder="Type here" {...register("email")}/>
  
                   </fieldset>


<fieldset className="fieldset">
  <legend className="fieldset-legend">password</legend>
  <input  type="password" className="input" placeholder="Type here" {...register('password')}/>
 
</fieldset>

<button className="btn btn-xs w-full bg-slate-800 text-white">Login</button>

<p>Dont have an account? <Link href={'/register'}>REGISTER</Link></p>
  
            </form>
           </div>
        </div>
    );
};

export default LoginPage;
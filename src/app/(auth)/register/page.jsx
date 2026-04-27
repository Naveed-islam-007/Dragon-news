"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client'; // ✅ import your auth client

const RegisterPage = () => {

  const { register, handleSubmit } = useForm();

 const handleRegister = async ({ name, email, password, photoUrl }) => {

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photoUrl,
      callbackURL: "/",
    });

    if (error) {
      console.error("Auth error:", error); // ✅ will show in browser console
    }

    console.log("Success:", data);
 
};

  return (
    <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
      <div className='p-4 rounded-xl bg-white w-1/4'>

        <h2 className='text-3xl font-bold text-center'>Register</h2>
        <form className='space-y-4' onSubmit={handleSubmit(handleRegister)}>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input type="text" className="input" placeholder="Type here" {...register("name")} />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input type="text" className="input" placeholder="Type here" {...register("photoUrl")} /> {/* ✅ type=text, camelCase key */}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="email" className="input" placeholder="Type here" {...register("email")} />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" className="input" placeholder="Type here" {...register("password")} />
          </fieldset>

          <button className="btn btn-xs w-full bg-slate-800 text-white">Register</button> {/* ✅ */}

          <p>Already have an account? <Link href='/login'>LOGIN</Link></p>

        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
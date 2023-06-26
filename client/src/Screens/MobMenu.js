import React from 'react';
import Layout from '../Layout/Layout';
import { NavLink } from 'react-router-dom';


function MobMenu() {
    
  return (
    <Layout>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 flex justify-center items-center'>
        <div className='w-full 2xl:w-2/5 p-8 sm:p-14 md:w-3/5  bg-dry border border-gray-800 rounded-lg '>
            <img src='/images/logo.png' alt='logo' className='w-full h-12 object-contain' />
            <NavLink to='/' className='mt-10 border border-white bg-main transitions hover:border-subMain hover:bg-subMain flex-rows gap-4 text-white p-3 rounded-lg w-full'>
            <p className='font-bold italic'>Home</p>
        </NavLink>
        <NavLink to='/movies' className='mt-2 border border-white bg-main transitions hover:border-subMain hover:bg-subMain flex-rows gap-4 text-white p-3 rounded-lg w-full'>
            <p className='font-bold italic'>Movies</p>
        </NavLink>
        <NavLink to='/profile' className='mt-2 border border-white bg-main transitions hover:border-subMain hover:bg-subMain flex-rows gap-4 text-white p-3 rounded-lg w-full'>
            <p className='font-bold italic'>Profile</p>
        </NavLink>
        <NavLink to='/about-cinecast' className='mt-2 border border-white bg-main transitions hover:border-subMain hover:bg-subMain flex-rows gap-4 text-white p-3 rounded-lg w-full'>
            <p className='font-bold italic'>Cinecast</p>
        </NavLink>
        <NavLink to='/contact-cinecast' className='mt-2 border border-white bg-main transitions hover:border-subMain hover:bg-subMain flex-rows gap-4 text-white p-3 rounded-lg w-full'>
            <p className='font-bold italic'>Contact</p>
        </NavLink>
        </div>
      </div>
    </Layout>
  );
}

export default MobMenu;

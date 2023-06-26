import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
        <img src='/images/404.svg' alt='404' className='w-full h-96 object-contain' />
        <h1 className='lg:text-4xl font-bold text-center mt-6'>Page Not Found</h1>
        <p className='font-medium text-border italic leading-6 text-center mt-4'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
  <Link to='/' className='bg-subMain text-white font-medium py-2 px-4 rounded-md'>
    Back To Home
  </Link>
</div>

    </div>
  )
}

export default NotFound

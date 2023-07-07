import React from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi'

function Promos() {
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-transparent'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <div className='flex lg:gap-10 gap-6 flex-col'>
          <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium leading-relaxed'>
            Watch your favourite movies only on Cinecast for free. Download any web series, movies or drama from our website and watch them offline absolutely free.
            </h1>
            <p className='text-text text-sm xl:text-base leading-6 xl:leading-7'>
            Our website offers a wide range of free movies that you can watch online, as well as the option to download them. We provide an extensive collection of movies across various genres, including action, romance, comedy, thriller, and more. Whether you're in the mood for a classic film or the latest blockbuster, our website has got you covered.

With our user-friendly interface, you can easily browse through the movie library, search for specific titles, or explore curated recommendations. Once you find a movie you're interested in, you have the choice to stream it directly on our platform or download it to watch later offline. We ensure that the streaming and download options are of high quality, allowing you to enjoy a seamless movie-watching experience.
            </p>
            <div className='flex gap-4 md:text-lg text-sm'>
            <div className='flex-colo bg-black text-subMain px-6 py-3 rounded font-bold'>
                UHD Quality
              </div>
              <div className='flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold'>
                <HiOutlineUserGroup /> 456k
              </div>
            </div>

        </div>
        <div>
          <img 
          src='/images/mobile.png' 
          alt='promo' 
          className='w-full object-contain' />
        </div>

      </div>

    </div>
  )
}

export default Promos;
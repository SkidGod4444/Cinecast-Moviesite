import React from 'react'
import Layout from './../Layout/Layout'
import Head from '../Components/Head'


function AboutUs() {
  return (
    <div>
      <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
      <Head title="Cinecast"/>
      <div className='xl:py-20 py-10 px-4'>
        <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
          <div>
            <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                Welcome to Cinecast!
            </h3>
          <div className='mt-3 text-sm leading-8 text-text'>
              <p>
                Cinecast is a web application that allows users to search for movies and TV shows.
                It also allows users to create a watchlist of movies and TV shows that they want to watch.
                Users can also rate movies and TV shows and see the average rating of a movie or TV show.
                You can download any movie or TV show that you want to watch.
              </p>
              </div>
              <div className='grid md:grid-cols-2 gap-6 mt-8'>
              <div className='p-8 bg-dry rounded-lg'>
                <span className='text-3xl block font-extrabold'>
                    100K+
                </span>
                <h4 className='text-lg font-semibold my-2'>
                    Free Contents
                </h4>
                <p className='mb-0 text-text leading-7 text-sm'>
                    We have a large collection of movies and TV shows that you can watch for free.
                </p>
                    </div>
                    <div className='p-8 bg-dry rounded-lg'>
                <span className='text-3xl block font-extrabold'>
                    80K+
                </span>
                <h4 className='text-lg font-semibold my-2'>
                    Active Users
                </h4>
                <p className='mb-0 text-text leading-7 text-sm'>
                    You can also join our community and start watching movies and TV shows.
                </p>
                    </div>
              </div>
          </div>
          <div className='mt-10 lg:mt-0'>
              <img src='/images/abtimg.jpg' alt='Aboutus' className='w-full xl:block hidden h-header roumded-lg object-cover'/>
          </div>
        </div>
      </div>
      </div>
      </Layout>
    </div>
  )
}

export default AboutUs

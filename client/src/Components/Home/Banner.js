import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { movies } from '../../Data/MovieData'
import { Autoplay } from 'swiper/core'
import FlexMovieItems from '../FlexMovieItems'
import { Link } from 'react-router-dom'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { BsInfoCircleFill } from 'react-icons/bs'


function Banner() {
  return (
    <div className='relative w-full'>
        <Swiper 
            direction='vertical'
            slidesPerView={1}
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            className='w-full xl:h-96 bg-dry lg:h-64 h-48'
        >
            {movies.slice(0, 5).map((movies, index) => (
                    <SwiperSlide key={index} className="relative rounded overflow-hidden">
                        <img src={`images/movies/${movies.poster}`} alt={movies.name} className="w-full h-full object-cover" />
                        <div className="absolute linear-bg xl:pl-50 xl:pt-75 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
                        <h1 className="xl-text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">{movies.name}</h1>

                            <div className="flex gap-5 items-center text-dryGray">
                                <FlexMovieItems movies={movies} />
                                </div>
                                <div className="flex gap-6 items-center">
                                <Link to={`/playing/${movies.id}`} className="bg-white hover:bg-subMain transitions text-white px-8 py-3 rounded bg-opacity-30 font-medium sm:text-sm text-xs">
                                        Play
                                        </Link>
                                <Link to={`/movies/${movies.id}`} className="bg-white hover:bg-subMain transitions text-white px-4 py-3 rounded bg-opacity-30 font-medium sm:text-sm text-xs">
                                        <BsInfoCircleFill />
                                        </Link>
                                        <button className="bg-white hover:bg-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30"> 
                                            <BsFillSuitHeartFill />
                                            </button>
                                        </div>
                            </div>
                        </SwiperSlide>
                ))}
        </Swiper>
    </div>
  )
}

export default Banner
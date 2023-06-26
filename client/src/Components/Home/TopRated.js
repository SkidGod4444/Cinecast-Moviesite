import React, { useState} from 'react'
import Titles from '../Titles'
import { BsCaretLeftFill,BsCaretRightFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { movies } from '../../Data/MovieData'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import Ratings from '../Ratings';


function TopRated() {
  const [nextEl, setNextEl] = useState(null)
  const [prevEl, setPrevEl] = useState(null)
  const classNames = "bg-subMain hover:bg-transparent border-2 border-subMain transitions text-white px-4 py-3 rounded text-sm ";
  return (
    <div className="my-16">
      <Titles title="Top Rated" Icon={BsFillBookmarkHeartFill}/>
      <div className='mt-10'>
      <Swiper navigation={{nextEl, prevEl}} autoplay={true} speed={1000} loop={true} modules={[Navigation, Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 40
        },
      }}>
      {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden">
                <img src={`/images/movies/${movie.poster}`} alt={movie.name} 
                className="w-full h-full object-cover rounded-lg" />
              
              <div className="px-4 hovers gap-6 text-center absolute bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0">
                <Link className='font-semibold text-xl trancuted line-camp-2'
        to={`/movie/${movie.id}`}>{movie.name}</Link>
        <div className='flex gap-2 text-star'>
          <Ratings value={movie.ratings} />
        </div>
              </div>
              </div>
            </SwiperSlide>
          ))
          }
      </Swiper>
      <div className='w-full px-1 flex-rows gap-6 pt-12'>
      <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
      </div>
        </div>
      </div>
  )
}

export default TopRated
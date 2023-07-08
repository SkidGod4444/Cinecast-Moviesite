import React, { useState } from 'react';
import Titles from '../Titles';
import { BsCaretLeftFill, BsCaretRightFill, BsFillBookmarkHeartFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import { Empty } from '../Notifications/EmptyN';
import Loader from '../Notifications/LoaderN';


const SwiperTop = ({ prevEl, nextEl, movies }) => {
  // const popular = movies?.filter((movie) => movie?.ratings >= 2);

  // // Sort the popular movies in descending order based on ratings
  // const sortedPopular = popular?.sort((a, b) => b.ratings - a.ratings);

  return (
    <Swiper
      navigation={{ nextEl, prevEl }}
      autoplay={true}
      speed={1000}
      loop={true}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      
      {movies?.map((movie, index) => (
        <SwiperSlide key={index}>
          <div className="p-4 h-rate hovered border hover:scale-110 transitions border-border bg-transparent rounded-lg overflow-hidden">
          <Link to={`/movies/${movie?._id}`}>
            <img
              src={movie?.titleimg ? movie.titleimg : '/images/userdp.jpg'}
              alt={movie?.name}
              className="w-full h-full object-cover rounded-lg"
            />
              </Link>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

function TopRated({ movies, isLoading }) {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames = 'bg-main hover:bg-subMain border-2 border-subMain transitions text-white px-4 py-3 rounded text-sm ';
  return (
    <div className="my-16">
      <Titles title="Top Rated" Icon={BsFillBookmarkHeartFill} />
      <div className="mt-10">
        {isLoading ? (
          <Loader />
        ) : movies?.length > 0 ? (
          <SwiperTop nextEl={nextEl} prevEl={prevEl} movies={movies} />
        ) : (
          <Empty message="Sorry no movies found!" />
        )}
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={classNames} ref={node => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={node => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopRated;

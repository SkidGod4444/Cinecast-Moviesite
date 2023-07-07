import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/core'
import FlexMovieItems from '../FlexMovieItems'
import { Link } from 'react-router-dom'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { BsInfoCircleFill } from 'react-icons/bs'
import Loader from '../../Components/Notifications/LoaderN'
import { Empty } from '../../Components/Notifications/EmptyN'
import { useDispatch, useSelector } from 'react-redux'
import { FavoriteMovie, IsFavorite } from '../../Context/Functionalities'

  // check if movie is in favorites
const IsInFavorite = (movie) => {
    return IsFavorite(movie)
}
const Swipper = ({sameClass,movies}) => {
    const {isLoading} = useSelector(state => state.UserAddFavoriteMovies)
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state => state.UserLogin)




    return(
        <Swiper 
            direction='horizontal'
            slidesPerView={1}
            loop={true}
            speed={1500}
            modules={[Autoplay]}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            className={sameClass}
        >
            {movies?.slice(0, movies?.length).map((movies, index) => (
                    <SwiperSlide key={index} className="relative rounded border-2 border-border overflow-hidden">
                        <img src={movies?.poster ? movies.poster : '/images/userdp.jpg'} alt={movies?.name} className="w-full h-full object-cover" />
                        <div className="absolute linear-bg xl:pl-50 xl:pt-75 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
                        <h1 className="xl-text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">{movies?.name}</h1>

                            <div className="flex gap-5 items-center text-dryGray">
                                <FlexMovieItems movies={movies} />
                                </div>
                                <div className="flex gap-6 items-center">
                                <Link to={`/playing/${movies?._id}`} className="bg-white hover:bg-subMain transitions text-white px-8 py-3 rounded bg-opacity-30 font-medium sm:text-sm text-xs">
                                        Play
                                        </Link>
                                <Link to={`/movies/${movies?._id}`} className="bg-white hover:bg-subMain transitions text-white px-4 py-3 rounded bg-opacity-30 font-medium sm:text-sm text-xs">
                                        <BsInfoCircleFill />
                                        </Link>
                                        <button 
                                        onClick={() => FavoriteMovie(movies, dispatch, userInfo)}
                                        disabled={IsInFavorite(movies) || isLoading}
                                        className={`bg-white  
                                        ${IsInFavorite(movies) ? 'text-subMain' : 'text-white'}
                                        transitions px-4 py-3 rounded text-sm bg-opacity-30`}> 
                                            <BsFillSuitHeartFill />
                                            </button>
                                        </div>
                            </div>
                        </SwiperSlide>
                ))}
        </Swiper>
    )
}

function Banner({movies, isLoading}) {
    const sameClass = 'w-full flex-colo xl:h-96 bg-dry lg:h-64 h-48'
return (
    <div className='relative w-full'>
        {
            isLoading ? (
                <div className={sameClass}>
                    <Loader />
                </div>
            ) : (
                movies?.length > 0 ? <Swipper sameClass={sameClass} movies={movies} />

                : (
                    <div className={sameClass}>
                        <Empty message='Sorry no movies found!' />
                        </div>
                )
            )
        }
    </div>
)
}

export default Banner
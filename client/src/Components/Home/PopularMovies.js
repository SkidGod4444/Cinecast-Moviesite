import React from 'react'
import Titles from '../Titles'
import { BsCollectionPlayFill } from "react-icons/bs";
import Movie from '../Movie'
import Loader from '../../Components/Notifications/LoaderN'
import { Empty } from '../../Components/Notifications/EmptyN'


function PopularMovies({isLoading,movies}) {
  return (
    <div className="my-16">
      <Titles title="Popular Movies" Icon={BsCollectionPlayFill}/>
      {
        isLoading ? <Loader /> :
        movies?.length > 0 ? (
          <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {movies?.slice(0, 8).map((movie, index) => (
              <Movie key={index} movie={movie} />
          ))}
        </div>
        ) :
        (
          <div className='mt-6'>
            <Empty message='Sorry no movies found!' />
            </div>
        )
      }
      
      </div>
  )
}

export default PopularMovies
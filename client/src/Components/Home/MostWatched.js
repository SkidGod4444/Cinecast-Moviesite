import React from 'react'
import Titles from '../Titles'
import { CgScreen } from "react-icons/cg";
import Movie from '../Movie'
import Loader from '../Notifications/LoaderN';
import { Empty } from '../Notifications/EmptyN';

function MostWatched({ movies, isLoading }) {
  return (
    <div className="my-16">
      <Titles title="Most Watched" Icon={CgScreen}/>
      {
        isLoading ? <Loader /> :
        movies?.length > 0 ? (
          <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {movies.slice(0, movies?.length > 30 ? 24 : 12).map((movie, index) => (
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

export default MostWatched
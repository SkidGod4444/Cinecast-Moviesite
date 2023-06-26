import React from 'react'
import Titles from '../Titles'
import { CgScreen } from "react-icons/cg";
import Movie from '../Movie'
import { movies } from '../../Data/MovieData'

function MostWatched() {
  return (
    <div className="my-16">
      <Titles title="Most Watched" Icon={CgScreen}/>
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {movies.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie} />
        ))}
      </div>
      </div>
  )
}

export default MostWatched
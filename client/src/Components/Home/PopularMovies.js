import React from 'react';
import Titles from '../Titles';
import { BsCollectionPlayFill } from 'react-icons/bs';
import Movie from '../Movie';
import Loader from '../../Components/Notifications/LoaderN';
import { Empty } from '../../Components/Notifications/EmptyN';

function PopularMovies({ isLoading, movies }) {
  const popular = movies?.filter((movie) => movie?.ratings >= 3);

  // Sort the popular movies in descending order based on ratings
  const sortedPopular = popular?.sort((a, b) => b.ratings - a.ratings);

  return (
    <div className="my-16">
      <Titles title="Popular Movies" Icon={BsCollectionPlayFill} />
      {isLoading ? (
        <Loader />
      ) : movies?.length > 0 ? (
        <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {sortedPopular?.slice(0, sortedPopular?.length > 30 ? 20 : sortedPopular?.length).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <Empty message="Sorry no popular movies found!" />
        </div>
      )}
    </div>
  );
}

export default PopularMovies;

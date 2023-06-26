import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import Filters from '../Components/Filters';
import Movie from '../Components/Movie';
import { movies } from '../Data/MovieData';
import { CgSpinner } from 'react-icons/cg';

function MoviesPage() {
  const [page, setPage] = useState(3);

  const handleLoadingMore = () => {
    setPage(page + 1);
  };

  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2 my-6">
        <Filters />
        <p className="text-lg font-medium my-6">
          Total <span className="font-bold text-subMain">{movies.length}</span> items Found
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {movies.slice(0, page).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
        {/* Loading More */}
        <div className="w-full flex-col md:my-10 ">
          <button onClick={handleLoadingMore} className="flex-rows gap-3 text-white py-3 px-7 rounded font-semibold border-2 border-subMain">
            Load More <CgSpinner className="animate-spin" />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default MoviesPage;

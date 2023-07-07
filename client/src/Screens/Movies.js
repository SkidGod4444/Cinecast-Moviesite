import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../Layout/Layout';
import Filters from '../Components/Filters';
import Movie from '../Components/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { GetAllMoviesAction } from '../Redux/Actions/MoviesActions';
import Loader from '../Components/Notifications/LoaderN';
import { RiMovie2Line } from 'react-icons/ri';
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';
import { AgelimitData, RatingData, TimeData } from '../Data/FilterData';
import { useParams } from 'react-router-dom';

function MoviesPage() {
  const {search} = useParams();
  const dispatch = useDispatch();
  const [category, setCategory] = useState({ title: 'All Categories' });
  const [time, setTime] = useState(TimeData[0]);
  const [ratings, setRatings] = useState(RatingData[0]);
  const [agelimit, setAgelimit] = useState(AgelimitData[0]);

  const sameClass = 'w-full gap-6 flex-colo min-h-screen'
  // all movies
  const { isLoading, isError, movies, pages, page } = useSelector((state) => state.GetAllMovies);

   // get all categories
  const { categories } = useSelector(state => state.CategoryGetAll);

  // queries 
  const queries = useMemo(() => {
    const query = {
      category: category?.title === 'All Categories' ? '' : category?.title,
      time: time?.title.replace(/\D/g, ''),
      ratings: ratings?.title.replace(/\D/g, ''),
      agelimit: agelimit?.title.replace(/\D/g, ''),
      search: search ? search : '',
    };
    return query;
  },[ category, time, ratings, agelimit, search]);

  // useEffect
  useEffect(() => {
    //errors 
    if (isError) {
      toast.error(isError);
    }
    // get all movies
    dispatch(GetAllMoviesAction(queries));
  }, [dispatch, isError, queries]);

  // pagination
  const NextPage = () => {
    dispatch(GetAllMoviesAction(
      { ...queries,
        pageNumber: page + 1 }));
  };
  const PrevPage = () => {
    dispatch(GetAllMoviesAction(
      { 
        ...queries,
        pageNumber: page - 1 }));
  };

  const datas = {
    categories: categories,
    category: category,
    setCategory: setCategory,
    time: time,
    setTime: setTime,
    ratings: ratings,
    setRatings: setRatings,
    agelimit: agelimit,
    setAgelimit: setAgelimit,
  }

  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2 my-6">
        <Filters data={datas}/>
        <p className="text-lg font-medium my-6">
          Total{''} <span className="font-bold text-subMain">{movies ? movies?.length : 0}</span>{''} items Found
        </p>
        {
          isLoading ? (
            <div className={sameClass}>
              <Loader />
            </div>
          ) : 
          movies?.length > 0 ? (
            <>
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {movies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
        {/* Loading More */}
        <div className="w-full flex-rows gap-6 md:my-10 ">
          <button onClick={PrevPage} disabled={page === 1} className='text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain hover:text-white transition duration-300'>
            <TbPlayerTrackPrev className='text-xl' />
          </button>

          <button onClick={NextPage} disabled={page === pages} className='text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain hover:text-white transition duration-300'>
            <TbPlayerTrackNext className='text-xl' />
          </button>
        </div>
            </>
          ) : (
            <div className={sameClass}>
              < div className='flex flex-col items-center justify-center gap-4 text-subMain'>
            <RiMovie2Line size={100} />
                <p className='text-border text-sm'>It seem's like we don't have any movies!</p>
            </div>
            </div>
          )
        }
        
      </div>
    </Layout>
  );
}

export default MoviesPage;

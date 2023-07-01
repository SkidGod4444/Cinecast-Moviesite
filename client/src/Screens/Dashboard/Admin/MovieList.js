import React, { useEffect } from 'react'
import SideBar from '../../Dashboard/SideBar'
import Table from '../../../Components/Table'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllMoviesAction } from '../../../Redux/Actions/MoviesActions';
import { toast } from 'react-hot-toast';
import Loader from '../../../Components/Notifications/LoaderN';
import { Empty } from '../../../Components/Notifications/EmptyN';
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';


function MovieList() {
  const dispatch = useDispatch();
  const { isLoading, isError, movies, pages, page } = 
  useSelector((state) => state.GetAllMovies);

  useEffect(() => {
     //errors 
    if (isError) {
      toast.error(isError);
    }
    dispatch(GetAllMoviesAction({}));
  }, [dispatch, isError]);

  // pagination
  const NextPage = () => {
    dispatch(GetAllMoviesAction(
      { pageNumber: page + 1 }));
  };
  const PrevPage = () => {
    dispatch(GetAllMoviesAction(
      { pageNumber: page - 1 }));
  };

  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Movies List</h2>
                <button className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'>
                    Remove All
                </button>
            </div>
            {
              isLoading ? (
              <Loader /> 
              ) : movies?.length > 0 ? ( 
                <>
                <Table data={movies} admin={true}/>
                {/* Loading More */}
        <div className="w-full flex-rows gap-6 my-5 ">
          <button onClick={PrevPage} disabled={page === 1} className='text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain hover:text-white transition duration-300'>
            <TbPlayerTrackPrev className='text-xl' />
          </button>

          <button onClick={NextPage} disabled={page === pages} className='text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain hover:text-white transition duration-300'>
            <TbPlayerTrackNext className='text-xl' />
          </button>
        </div>
                </>
              ) : (
                <Empty message='No Movies Yet, Try Adding Some!' />
            )}
            
        </div>
    </SideBar>
  )
}

export default MovieList
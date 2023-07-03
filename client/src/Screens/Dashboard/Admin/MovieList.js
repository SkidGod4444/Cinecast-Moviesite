import React, { useEffect } from 'react'
import SideBar from '../../Dashboard/SideBar'
import Table from '../../../Components/Table'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAllMoviesAction, DeleteMovieAction, GetAllMoviesAction } from '../../../Redux/Actions/MoviesActions';
import { toast } from 'react-hot-toast';
import Loader from '../../../Components/Notifications/LoaderN';
import { Empty } from '../../../Components/Notifications/EmptyN';
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';


function MovieList() {
  const dispatch = useDispatch();
  const { isLoading, isError, movies, pages, page } = 
  useSelector((state) => state.GetAllMovies);
  // delete
  const { isLoading:deleteLoading, isError:deleteError } = 
  useSelector((state) => state.DeleteMovie);
  // delete all
  const { isLoading:deleteAllLoading, isError:deletAllError } = 
  useSelector((state) => state.DeleteAllMovies);


  // delete movie handler
  const DeleteMovieHandler = (id) => {
    window.confirm('Are you sure you want to delete this movie?') &&
    dispatch(DeleteMovieAction(id));
  }
  // delete all movie handler
  const DeleteAllMovieHandler = () => {
    window.confirm('Are you sure you want to delete all movies?') &&
    dispatch(DeleteAllMoviesAction());
  }
  useEffect(() => {
     //errors 
    if (isError || deleteError || deletAllError) {
      toast.error(isError || deleteError || deletAllError);
    }
    dispatch(GetAllMoviesAction({}));
  }, [dispatch, isError, deleteError, deletAllError]);

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
                {
                  movies?.length > 0 && <button
                  disabled={deleteAllLoading}
                  onClick={DeleteAllMovieHandler}
                  className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'>
                    {
                      deleteAllLoading ? 'Removing...' : 'Remove All'
                    }
                </button>
                }
                
            </div>
            {
              isLoading || deleteLoading ? (
              <Loader /> 
              ) : movies?.length > 0 ? ( 
                <>
                <Table data={movies} onDeleteHandler={DeleteMovieHandler} admin={true} />
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
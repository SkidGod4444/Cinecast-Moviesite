import React from 'react'
import SideBar from '../Dashboard/SideBar'
import Table from '../../Components/Table'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetFavoriteMoviesAction, DeleteFavouriteMoviesAction } from '../../Redux/Actions/UserActions'
import { toast } from 'react-toastify'
import Loader from '../../Components/Notifications/LoaderN'
import { Empty } from '../../Components/Notifications/EmptyN'


function Favourites() {
  const dispatch = useDispatch()

  const { isLoading, isError, favourite} = useSelector((state) => state.UserGetFavoriteMovies);

// delete all favourites
const { isLoading:deleteLoading, isError:deleteError, isSuccess} = useSelector((state) => state.UserDeleteFavoriteMovies);

// delete movies handler
const deleteMoviesHandler = () => {
  window.confirm('Are you sure you want to delete all favourites?') &&
  dispatch(DeleteFavouriteMoviesAction())
}


  // useEffect 
  useEffect(() => {
    dispatch(GetFavoriteMoviesAction());
    if (isError || deleteError) {
      toast.error(isError || deleteError);
      dispatch({ type: isError ? 'GET_FAVOURITES_RESET' : 'DELETE_FAVOURITES_RESET'})
    }
  }, [dispatch, isError, deleteError, isSuccess]);
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Favourites</h2>
                {
                  favourite?.length > 0 && (
                  <button 
                  disabled={deleteLoading}
                  onClick={deleteMoviesHandler}
                  className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'>
                    {
                      deleteLoading ? 'Removing...' : 'Remove All'
                    }
                </button>
                )}
                
            </div>
            {
              isLoading ? (
              <Loader /> 
              ) : favourite.length > 0 ? ( 
              <Table data={favourite} admin={false}/>
              ) : (
                <Empty message='No Favourites Yet, Try Adding Some!' />
            )}
            
        </div>
    </SideBar>
  )
}

export default Favourites
import React, { useEffect } from 'react'
import SideBar from '../../Dashboard/SideBar'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import Table from '../../../Components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteMovieAction, GetAllMoviesAction } from '../../../Redux/Actions/MoviesActions'
import { toast } from 'react-hot-toast'
import { GetAllUsersAction } from '../../../Redux/Actions/UserActions'
import {CategoriesData} from '../../../Data/CategoriesData'
import Loader from '../../../Components/Notifications/LoaderN'
import { Empty } from '../../../Components/Notifications/EmptyN'
function Dashboad() {
    const dispatch = useDispatch()
    const { isLoading:userLoading, isError:userError, users } = useSelector(
        (state) => state.AdminGetAllUsers);
    
    const { isLoading, isError, movies, totalMovies} = useSelector(
        (state) => state.GetAllMovies);

    // delete movie handler
  const DeleteMovieHandler = (id) => {
    window.confirm('Are you sure you want to delete this movie?') &&
    dispatch(DeleteMovieAction(id));
  }
    // useEffect
    // useEffect 
    useEffect(() => {
        // dispatch random movies
        dispatch(GetAllUsersAction())
        // dispatch all movies
        dispatch(GetAllMoviesAction({}))
        // dispatch top rated movies
        // dispatch(GetTopRatedMoviesAction())
        // errors
        if (isError || userError ){
            toast.error(isError || userError )
        }
        }, [dispatch, isError, userError])

    const DashboardData = [
        {
            bg: 'bg-orange-500',
            title: 'Movies',
            icon:FaRegListAlt,
            total: isLoading ? 'Fetching...' : totalMovies || "IDKFUCKOFF"
        },
        {
            bg: 'bg-blue-700',
            title: 'Categories',
            icon:HiViewGridAdd,
            total: isLoading ? 'Fetching' : CategoriesData.length || "IDKFUCKOFF"
        },
        {
            bg: 'bg-green-600',
            title: 'Users',
            icon:FaUser,
            total: userLoading ? 'Fetching...' : users?.length || "IDKFUCKOFF"
        }
    ]
  return (
    <SideBar>
        <h2 className='text-xl font-bold'>Dashboard</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
            {DashboardData.map((item, index) => (
                <div key={index} className={`bg-main rounded p-4 border-border grid grid-cols-4 gap-2`}>
                <div className={`col-span-1 rounded-full h-12 w-12 flex items-center justify-center ${item.bg}`}>
                  <item.icon />
                </div>
                <div>
                    <h2 className='col-span-3'>
                        {item.title}
                    </h2>
                    <p className=' mt-2 font-bold'>{item.total}</p>
              </div> 
                </div>
                        ))}
        </div>
        <h3 className='text-md font-medium my-6 italic text-border'>Recent Movies</h3>
        {
            isLoading ? (
            <Loader /> 
            ) : movies.length > 0 ? ( 
            <Table data={movies?.slice(0, 5)} onDeleteHandler={DeleteMovieHandler} admin={true}/>
            ) : (
            <Empty message='No Movies Yet, Try Adding Some!' />
        )}
        
    </SideBar>
  )
}

export default Dashboad
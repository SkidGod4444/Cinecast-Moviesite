import React, { useEffect } from 'react'
import SideBar from '../../Dashboard/SideBar'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllMoviesAction } from '../../../Redux/Actions/MoviesActions'
import { toast } from 'react-hot-toast'
import { GetAllUsersAction } from '../../../Redux/Actions/UserActions'
import {CategoriesData} from '../../../Data/CategoriesData'
import { GrUserAdmin } from 'react-icons/gr'


function Dashboad() {

    const dispatch = useDispatch()
    const { isLoading:userLoading, isError:userError, users } = useSelector(
        (state) => state.AdminGetAllUsers);
    
    const { isLoading, isError, totalMovies} = useSelector(
        (state) => state.GetAllMovies);

    // get admins count
    const admins = users?.filter((user) => user.isAdmin === true)



    

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
            bg: 'bg-green-600',
            title: 'Users',
            icon:FaUser,
            total: userLoading ? 'Fetching...' : users?.length || "IDKFUCKOFF"
        },
        {
            bg: 'bg-red-600',
            title: 'Admins',
            icon:GrUserAdmin,
            total: userLoading ? 'Fetching...' : admins?.length || "IDKFUCKOFF"
        },
        {
            bg: 'bg-blue-700',
            title: 'Categories',
            icon:HiViewGridAdd,
            total: isLoading ? 'Fetching...' : CategoriesData.length || "IDKFUCKOFF"
        },
        {
            bg: 'bg-grey-700',
            title: 'N/A',
            icon:HiViewGridAdd,
            total: isLoading ? 'Fetching...' : 'Soon' || "IDKFUCKOFF"
        },
        {
            bg: 'bg-grey-700',
            title: 'N/A',
            icon:HiViewGridAdd,
            total: isLoading ? 'Fetching...' : 'Soon' || "IDKFUCKOFF"
        },
    ]
  return (
    <SideBar>
        <h2 className='text-xl font-bold'>Dashboard</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
            {DashboardData.map((item, index) => (
                <div key={index} className={`bg-border rounded p-4 border-border grid grid-cols-4 gap-2`}>
                <div className={`col-span-1 rounded-full h-12 w-12 flex items-center justify-center ${item.bg}`}>
                  <item.icon size={20} />
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
        {/*  */}
        
    </SideBar>
  )
}

export default Dashboad
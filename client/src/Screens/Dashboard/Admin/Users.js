import React from 'react'
import SideBar from '../../Dashboard/SideBar'
import Table2 from '../../../Components/Table2'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUserAction, GetAllUsersAction } from '../../../Redux/Actions/UserActions'
import { toast } from 'react-toastify'
import Loader from '../../../Components/Notifications/LoaderN'
import { Empty } from '../../../Components/Notifications/EmptyN'


function Users() {
  const dispatch = useDispatch()

  const { isLoading, isError, users} = useSelector((state) => state.AdminGetAllUsers);

// delete all favourites
const { isError:deleteError, isSuccess} = useSelector((state) => state.AdminDeleteUser);

// delete user handler
const deleteUserHandler = (id) => {
  if (window.confirm('Are you sure you want to delete this user?')) {
    dispatch(DeleteUserAction(id));
  }
}


  // useEffect 
  useEffect(() => {
    dispatch(GetAllUsersAction());
    if (isError || deleteError) {
      toast.error(isError || deleteError);
      dispatch({ type: isError ? 'GET_ALL_USERS_RESET' : 'DELETE_USER_RESET'})
    }
  }, [dispatch, isError, deleteError, isSuccess]);
  return (
    <SideBar>
    <div className='flex flex-col gap-6'>
          <div className='flex-btn gap-2'>
              <h2 className='text-xl font-bold'>Cinecast Users</h2>
          </div>
          {
              isLoading ? (
              <Loader /> 
              ) : users?.length > 0 ? ( 
                <Table2 data={users} users={true} OnDeleteFunction={deleteUserHandler}/>
              ) : (
                <Empty message='No Users Yet, Try Adding Some!' />
            )}
      </div>
  </SideBar>
  )
}

export default Users
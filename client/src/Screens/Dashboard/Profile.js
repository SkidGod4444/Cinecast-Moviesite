import React from 'react'
import SideBar from '../Dashboard/SideBar'
import Uploader from '../../Components/Uploader';
import { Input } from '../../Components/UserInputs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProfileValidation } from '../../Components/Validation/UserValidation';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { DeleteProfileAction, UpdateProfileAction } from '../../Redux/Actions/UserActions';
import { useEffect } from 'react';
import { InlineError } from '../../Components/Notifications/ErrorN';
import { ImagePreview } from '../../Components/ImagePreview';
import { useState } from 'react';



function Profile() {
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state) => state.UserLogin);
  const [imageUrl, setImageUrl] = useState(userInfo ? userInfo.image : '');
  const { isLoading, isError, isSuccess } = useSelector((state) => state.UserUpdateProfile);
  const { isLoading:deleteLoading, isError:deleteError } = 
  useSelector((state) => state.UserUpdateProfile);


  // validate user
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProfileValidation),
  })

  // update profile
  const onSubmit = (data) => {
    dispatch(UpdateProfileAction({ ...data, image: imageUrl }));
  };

  // delete account
  const deleteAccount = () => {
    window.confirm('Are you sure you want to delete your account?');
    dispatch(DeleteProfileAction());
  };

// useEffect
  useEffect(() => {
  if (userInfo) {
    setValue('username', userInfo.username);
    setValue('email', userInfo.email);
  }
  if (isSuccess) {
    dispatch({ type: 'USER_UPDATE_PROFILE_RESET' });
  }
  if (isError || deleteError) {
    toast.error(isError || deleteError);
    dispatch({ type: 'USER_UPDATE_PROFILE_RESET' });
    dispatch({ type: 'USER_DELETE_PROFILE_RESET' });
  }
}, [userInfo, setValue, dispatch, isError, isSuccess, deleteError]);
  return (
    <SideBar>
        <form onSubmit={
          handleSubmit(onSubmit)
        } className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold'> Manage Profile</h2>
          <div className='w-full grid lg:grid-cols-12 gap-6'>
            <div className='col-span-10'>
            <Uploader setImageUrl={setImageUrl}/>
            </div>
            {/* image preview */}
            <div className='col-span-2'>
              <ImagePreview image={imageUrl} name={userInfo ? userInfo.username : 'Cinecast'} />
            </div>
          </div>
          <div className='w-full'>
            <Input 
            label="Username" 
            type="text" 
            placeholder="Enter your username"
            name="username"
            register={register("username")}
            bg={true} />
            {
              errors.username && <InlineError text={errors.username.message} />
            }
            </div>
          <div className='w-full'>
            <Input 
            label="Email" 
            type="email" 
            placeholder="Enter your email"
            name="email"
            register={register("email")}
            bg={true} />
            {
              errors.email && <InlineError text={errors.email.message} />
            }
            </div>
          <div className='flex gap-3 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
          <button 
          onClick={deleteAccount}
          disabled={deleteLoading || isLoading}
          className='bg-subMain font-medium transitions hover:bg-main border border-subMain text-white px-6 py-3 rounded w-full sm:w-auto '>
            {deleteLoading ? 'Deleting...' : 'Delete Account'}
            </button>
          <button 
          disabled={deleteLoading || isLoading}
          className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white px-6 py-3 rounded w-full sm:w-auto '>
          {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
    </SideBar>
  )
}

export default Profile;
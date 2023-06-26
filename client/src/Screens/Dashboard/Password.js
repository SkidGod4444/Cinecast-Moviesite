import React from 'react'
import SideBar from '../Dashboard/SideBar'
import { Input } from '../../Components/UserInputs';
import { useDispatch, useSelector} from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PasswordValidation } from '../../Components/Validation/UserValidation';
import { ChangePasswordAction } from '../../Redux/Actions/UserActions';
import { InlineError } from '../../Components/Notifications/ErrorN';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';



function Password() {
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.UserChangePassword);

    // validate user
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(PasswordValidation),
    });

    // update password
    const onSubmit = (data) => {
      // console.log(data);
      dispatch(ChangePasswordAction(data));
      
    };

    // useEffect
  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: 'USER_CHANGE_PASSWORD_RESET' });
    }
    if (isError) {
      toast.error(isError);
      dispatch({ type: 'USER_CHANGE_PASSWORD_RESET' });
    }
    if (message) {
      toast.success(message);
      reset();
    }
  }, [dispatch, isError, isSuccess, message, reset]);

  return (
    <SideBar>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>Manage Password</h2>
        <div className='w-full'>
        <Input 
        label="Old Password" 
        type="password" 
        placeholder="Enter your old password" 
        bg={true}
        name='Oldpassword'
        register={register('Oldpassword')}
        />
            {
              errors.Oldpassword && <InlineError text={errors.Oldpassword.message} />
            }
            </div>
            <div className='w-full'>
        <Input 
        label="New Password" 
        type="password" 
        placeholder="Enter your new password" 
        bg={true}
        name='Newpassword'
        register={register('Newpassword')}
        />
            {
              errors.Newpassword && <InlineError text={errors.Newpassword.message} />
            }
            </div>
        
        <div className='flex justify-end items-center my-4'>
        <button 
        disabled = {isLoading}
        type='submit' className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white px-6 py-3 rounded w-full sm:w-auto '>
          {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
        </form>
    </SideBar>
  )
}

export default Password
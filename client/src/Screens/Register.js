import {React, useEffect} from 'react';
import Layout from '../Layout/Layout';
import { Input } from '../Components/UserInputs';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {RegisterValidation} from '../Components/Validation/UserValidation';
import {InlineError} from '../Components/Notifications/ErrorN';
import { RegisterAction } from '../Redux/Actions/UserActions';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector} from 'react-redux';



function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, userInfo } = useSelector((state) => state.UserLogin);

  // validate user
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterValidation),
  })

  // submit form
  const onSubmit = (data) => {
    // console.log(data);
    dispatch(RegisterAction(data));
  };

// useEffect
  useEffect(() => {
  if (userInfo?.isAdmin) {
    navigate('/dashboard');
  }
  else if (userInfo) {
    navigate('/');
  }

  if (isSuccess) {
    navigate('/');
    toast.success('Successfully registered!');
    dispatch({ type: 'USER_REGISTER_RESET' });
    toast.error('Please refresh to continue!');
  }
  if (isError) {
    toast.error(isError);
    dispatch({ type: 'USER_REGISTER_RESET' });
  }
}, [userInfo, navigate, isSuccess, isError, dispatch]);

  return (
    <Layout>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 flex justify-center items-center'>
      <form onSubmit={
          handleSubmit(onSubmit)
        } className='w-full 2xl:w-2/5 p-8 sm:p-14 md:w-3/5  bg-transparent border-2 border-border rounded-lg '>
            <img src='/images/logo.png' alt='logo' className='w-full h-12 object-contain' />
            <div className='w-full'>
              <Input 
              label="Username" 
              type="text" 
              placeholder="Enter your Username" 
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

            <div className='w-full'>
            <Input 
            label="Password" 
            type="password" 
            placeholder="Enter your password"
            name="password"
            register={register("password")}
            bg={true} />
            {
              errors.password && <InlineError text={errors.password.message} />
            }
            </div>
            <button disabled={isLoading} className='mt-10 bg-subMain transitions flex-rows gap-4 text-white p-3 rounded-lg w-full'>
            {
                  isLoading ? (
                    'Loading...'
                  ):(
                    <>
                    <FiLogIn /> Sign Up
                    </>
                  )
                }
            </button>
            <p className='mt-2 text-center text-white '>
                Already have an account? <Link to='/login' className='text-subMain'>Sign In</Link>
            </p>
        </form>
      </div>
    </Layout>
  );
}

export default Register;

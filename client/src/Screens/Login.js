import {React , useEffect} from 'react';
import Layout from '../Layout/Layout';
import { Input } from '../Components/UserInputs';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch, useSelector} from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginValidation} from '../Components/Validation/UserValidation';
import {InlineError} from '../Components/Notifications/ErrorN';
import { LoginAction } from '../Redux/Actions/UserActions';
import { toast } from 'react-hot-toast';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, userInfo } = useSelector((state) => state.UserLogin);

  // validate user
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidation),
  })

  // submit form
  const onSubmit = (data) => {
    // console.log(data);
    dispatch(LoginAction(data));
  };

// useEffect
  useEffect(() => {
  if (userInfo?.isAdmin) {
    navigate('/dashboard');
  }
  else if (userInfo) {
    navigate('/profile');
  }

  if (isSuccess) {
    console.log(userInfo);
    toast.success('Nice to see you again!');
  }
  if (isError) {
    toast.error(isError);
    dispatch({ type: 'USER_LOGIN_RESET' });
  }
}, [userInfo, navigate, isSuccess, isError, dispatch]);

  return (
    <Layout>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 flex justify-center items-center'>
        <form onSubmit={
          handleSubmit(onSubmit)
        } className='w-full 2xl:w-2/5 p-8 sm:p-14 md:w-3/5  bg-dry border border-subMain rounded-lg '>
            <img src='/images/logo.png' alt='logo' className='w-full h-12 object-contain' />
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

            <button 
            type='submit' 
            disabled={isLoading}
            className='mt-10 bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-3 rounded-lg w-full'>
              {
                  isLoading ? (
                    'Loading...'
                  ):(
                    <>
                    <FiLogIn /> Sign In
                    </>
                  )
                }
              
            </button>
            <p className='mt-2 text-center text-white '>
                New to Cinecast? <Link to='/register' className='text-subMain'>Sign Up</Link>
            </p>
        </form>
      </div>
    </Layout>
  );
}

export default Login;

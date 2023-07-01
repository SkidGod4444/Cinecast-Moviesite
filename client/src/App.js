import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Screens/AboutUs';
import HomeScreen from './Screens/HomeScreen';
import NotFound from './Screens/NotFound';
import MovieInfo from './Screens/MovieInfo';
import ContactUs from './Screens/ContactUs';
import MoviesPage from './Screens/Movies';
import WatchScreen from './Screens/WatchScreen';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Profile from './Screens/Dashboard/Profile';
import Aos from 'aos';
import Password from './Screens/Dashboard/Password';
import Favourites from './Screens/Dashboard/Favourites';
import MovieList from './Screens/Dashboard/Admin/MovieList';
import Dashboad from './Screens/Dashboard/Admin/Dashboad';
import Categories from './Screens/Dashboard/Admin/Categories';
import Users from './Screens/Dashboard/Admin/Users';
import AddMovie from './Screens/Dashboard/Admin/AddMovie';
import ScrollOnTop from './ScrollOnTop';
import MobMenu from './Screens/MobMenu';
import ToastN from './Components/Notifications/ToastN';
import { AdminProtectedRouters, ProtectedRouters } from './ProtectedRouters';
import { useDispatch, useSelector } from 'react-redux';
import { GetFavoriteMoviesAction } from './Redux/Actions/UserActions';
import { toast } from 'react-hot-toast';


function App() {
  Aos.init();
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.UserLogin)
  const {isError, isSuccess} = useSelector(state => state.UserAddFavoriteMovies)
  useEffect(() => {
    if (userInfo) {
      dispatch(GetFavoriteMoviesAction())
    }
    if (isError) {
      toast.error('Something went wrong')
      dispatch({type: 'ADD_FAVORITES_RESET'})
    }
    if (isSuccess) {

      dispatch({type: 'ADD_FAVORITES_RESET'})
    }
  }, [dispatch, userInfo, isError, isSuccess]);


  return (
    <>
    <ToastN />
<ScrollOnTop>
<Routes>
  {/* *********** PUBLIC ROUTERS *********** */}
  <Route path="/" element={<HomeScreen />} />
  <Route path="/about-cinecast" element={<AboutUs />} />
  <Route path="/contact-cinecast" element={<ContactUs />} />
  <Route path="/movies" element={<MoviesPage />} />
  <Route path="movies/get/:search" element={<MoviesPage />} />
  <Route path="/movies/:id" element={<MovieInfo />} />
  <Route path="/playing/:id" element={<WatchScreen />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/mobile-view/xxmobyymenuzz" element={<MobMenu />} />
  <Route path="*" element={<NotFound />} />
  {/* *********** PRIVATE PUBLIC ROUTERS *********** */}
  <Route element={<ProtectedRouters />}>
  <Route path="/profile" element={<Profile />} />
  <Route path="/password" element={<Password />} />
  <Route path="/favourites" element={<Favourites />} />
  {/* *********** ADMIN ROUTERS *********** */}
  <Route element={<AdminProtectedRouters />}>
  <Route path="/movieslist" element={<MovieList />} />
  <Route path="/dashboard" element={<Dashboad />} />
  <Route path="/categories" element={<Categories />} />
  <Route path="/users" element={<Users />} />
  <Route path="/addmovie" element={<AddMovie />} />
  
  </Route>
  </Route>
</Routes>
</ScrollOnTop>
    </>

  );
}

export default App;

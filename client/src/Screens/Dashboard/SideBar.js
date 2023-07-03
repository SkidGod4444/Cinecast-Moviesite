import React from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { FaListAlt, FaUsers, FaHeart } from 'react-icons/fa';
import { RiMovie2Fill, RiLockPasswordLine, RiLogoutCircleLine } from 'react-icons/ri';
// import { HiViewGridAdd } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import Layout from '../../Layout/Layout';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutAction } from '../../Redux/Actions/UserActions';
import { toast } from 'react-hot-toast';


function SideBar({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.UserLogin);

  // logout
  const LogoutHandler = () => {
    dispatch(LogoutAction());
    toast.success('Logged out successfully');
    navigate('/login');
  };
  const SideLinks =
  // if userInfo?.isAdmin is true then show the following links
  userInfo?.isAdmin ? [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: BsFillGridFill
    },
    {
      name: 'Movies List',
      path: '/movieslist',
      icon: FaListAlt
    },
    {
      name: 'Add Movie',
      path: '/addmovie',
      icon: RiMovie2Fill
    },
    // {
    //   name: 'Categories',
    //   path: '/categories',
    //   icon: HiViewGridAdd
    // },
    {
      name: 'Users',
      path: '/users',
      icon: FaUsers
    },
    {
      name: 'Manage Profile',
      path: '/profile',
      icon: FiSettings
    },
    {
      name: 'Favourites',
      path: '/favourites',
      icon: FaHeart
    },
] : userInfo ? [
  {
    name: 'Manage Profile',
    path: '/profile',
    icon: FiSettings
  },
  {
    name: 'Manage Password',
    path: '/password',
    icon: RiLockPasswordLine
  },
  {
    name: 'Favourites',
    path: '/favourites',
    icon: FaHeart
  },
] : [];



  const active = 'bg-dryGray text-subMain';
  const hover = 'hover:text-white hover:bg-main';
  const inActive = 'rounded font-medium text-sm transitions flex gap-3 items-center p-4';
  const Hover = ({ isActive }) => (isActive ? `${active} ${inActive}` : `${hover} ${inActive}`);

  return (
    <Layout>
      <div className="mini-h-screen container mx-auto px-2">
        <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
          <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
            {SideLinks.map((link, index) => (
              <NavLink to={link.path} key={index} className={Hover}>
                <link.icon /> <p>{link.name}</p>
              </NavLink>
            ))}
            <button onClick={LogoutHandler} className={`${inActive} ${hover} w-full`}>
              <RiLogoutCircleLine /> <p>Log Out</p>
            </button>
          </div>
          <div 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className="col-span-6 rounded-md bg-dry border border-gray-800 p-6">
            {children}
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default SideBar;

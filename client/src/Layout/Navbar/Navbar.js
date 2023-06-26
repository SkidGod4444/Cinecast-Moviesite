import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdScreenSearchDesktop } from 'react-icons/md';
import { RiUser4Fill } from 'react-icons/ri';
import { BsBox2HeartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

function Navbar() {
  const { userInfo } = useSelector((state) => state.UserLogin);
  const { favourite } = useSelector((state) => state.UserGetFavoriteMovies);
    const hover = "hover:text-subMain transitions text-white"
    const Hover = ({isActive}) => (isActive ? 'text-subMain' : hover )
  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 lg:grid-cols-7 justify-between items-center">
            {/* LOGO */}
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img src='/images/logo.png' alt='logo' className="w-full h-12 object-contain" />
            </Link>
          </div>
          {/* SEARCH FORM */}
          <div className="col-span-3 ">
            <form className="w-80 text-sm bg-dryGray rounded flex-btn gap-4">
              <button type='submit' className="bg-subMain w-12 flex-colo h-12 rounded text-white">
                <MdScreenSearchDesktop style={{ fontSize: '25px', marginLeft: '8px' }} /> 
              </button>
              <input type="text" placeholder="Search Movies Name..." className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black "/>
            </form>
          </div>
            {/* MENUS */}
            <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/movies" className={Hover}>
                    Movies
                    </NavLink>
            <NavLink to="/about-cinecast" className={Hover}>
                    Cinecast
                    </NavLink>
            <NavLink to="/contact-cinecast" className={Hover}>
                    Contact
                    </NavLink>
                    <NavLink to={
                      userInfo?.isAdmin ? "/dashboard" : userInfo ? "/profile" : "/login"
                    } className={Hover}>
                      {
                        userInfo ? (
                          <img src={userInfo?.image ? userInfo?.image : "/images/userdp.jpg"} alt={userInfo?.username} className="w-8 h-8 rounded-full border object-cover border-subMain"/>
                        ) : (
                          <RiUser4Fill className="w-6 h-8"/>
                      )}
                
                    </NavLink>
                    <NavLink to="/favourites" className={`${Hover} relative flex items-center justify-center`}>
      <BsBox2HeartFill className="w-5 h-8" />
      <div className="w-5 h-5 rounded-full bg-subMain text-white text-center absolute -top-5 -right-1 flex items-center justify-center">
        <span className="text-xs">{favourite?.length}</span>
      </div>
    </NavLink>
            </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

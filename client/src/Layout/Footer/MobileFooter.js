import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCollectionPlay, BsBox2HeartFill } from 'react-icons/bs'
import { RiUser4Fill } from 'react-icons/ri'
import { CgMenuBoxed } from 'react-icons/cg'
import { useSelector } from 'react-redux'


function MobileFooter() {
    
const { userInfo } = useSelector((state) => state.UserLogin);
// const { favourite } = useSelector((state) => state.UserGetFavoriteMovies);
    const active = 'bg-transparent border-2 border-border text-main'
    const inActive = 'transitions text-2xl flex-colo hover:bg-border hover:text-main text-white rounded-md px-4 py-3'
    const Hover = ({ isActive }) => isActive ? `${active} ${inActive}` : inActive
  return (
    <>
    <div className='flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full'>
        {/* DRAWER */}
    </div>
    <footer className='lg:hidden fixed z-50 bottom-0 w-full px-1'>
        <div className='bg-transparent rounded-md flex-btn w-full p-1'>
        <NavLink to='/movies' className={Hover}>
            <BsCollectionPlay />
        </NavLink>
        <NavLink to="/favourites" className={`${Hover} relative`}>
                <BsBox2HeartFill className="w-5 h-8"/>
        </NavLink>
        <NavLink to='/mobile-view/xxmobyymenuzz' className={Hover}>
            <CgMenuBoxed className="w-6 h-8"/>
        </NavLink>
        <NavLink
            to={userInfo?.isAdmin ? "/dashboard" : userInfo ? "/profile" : "/login"}
            className={Hover}
          >
            {userInfo ? (
              <img
                src={userInfo?.image ? userInfo?.image : "/images/userdp.jpg"}
                alt={userInfo?.username}
                className="w-8 h-8 rounded-full border object-cover border-border"
              />
            ) : (
              <RiUser4Fill className="w-6 h-8" />
            )}
          </NavLink>
        </div>
    </footer>
    </>
  )
}

export default MobileFooter
import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCollectionPlay, BsBox2HeartFill } from 'react-icons/bs'
import { RiUser4Fill } from 'react-icons/ri'
import { CgMenuBoxed } from 'react-icons/cg'


function MobileFooter() {
    const active = 'bg-subMain text-main'
    const inActive = 'transitions text-2xl flex-colo hover:bg-white hover:text-main text-white rounded-md px-4 py-3'
    const Hover = ({ isActive }) => isActive ? `${active} ${inActive}` : inActive
  return (
    <>
    <div className='flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full'>
        {/* DRAWER */}
    </div>
    <footer className='lg:hidden fixed z-50 bottom-0 w-full px-1'>
        <div className='bg-dry rounded-md flex-btn w-full p-1'>
        <NavLink to='/movies' className={Hover}>
            <BsCollectionPlay />
        </NavLink>
        <NavLink to="/favourites" className={`${Hover} relative`}>
                <BsBox2HeartFill className="w-5 h-8"/>
                <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white text-center absolute -top-5 -right-1">
                    30
                </div>
        </NavLink>
        <NavLink to='/login' className={Hover}>
            <RiUser4Fill />
        </NavLink>
        <NavLink to='/mobile-view/xxmobyymenuzz' className={Hover}>
            <CgMenuBoxed />
        </NavLink>
        </div>
    </footer>
    </>
  )
}

export default MobileFooter
import React from 'react'
import SideBar from '../../Dashboard/SideBar'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import Table from '../../../Components/Table'
import { movies } from '../../../Data/MovieData'

function Dashboad() {
    const DashboardData = [
        {
            bg: 'bg-orange-500',
            title: 'Movies',
            icon:FaRegListAlt,
            total:10
        },
        {
            bg: 'bg-blue-700',
            title: 'Categories',
            icon:HiViewGridAdd,
            total:4
        },
        {
            bg: 'bg-green-600',
            title: 'Users',
            icon:FaUser,
            total:100
        }
    ]
  return (
    <SideBar>
        <h2 className='text-xl font-bold'>Dashboard</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
            {DashboardData.map((item, index) => (
                <div key={index} className={`bg-main rounded p-4 border-border grid grid-cols-4 gap-2`}>
                <div className={`col-span-1 rounded-full h-12 w-12 flex items-center justify-center ${item.bg}`}>
                  <item.icon />
                </div>
                <div>
                    <h2 className='col-span-3'>
                        {item.title}
                    </h2>
                    <p className=' mt-2 font-bold'>{item.total}</p>
              </div> 
                </div>
                        ))}
        </div>
        <h3 className='text-md font-medium my-6 italic text-border'>Recent Movies</h3>
        <Table data={movies.slice(0, 5)} admin={true}/>
    </SideBar>
  )
}

export default Dashboad
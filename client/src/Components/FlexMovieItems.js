import React from 'react'
import { SlCalender } from 'react-icons/sl'
import { BiTimeFive } from 'react-icons/bi'
import { TbCategory } from 'react-icons/tb'
// import { MdOutlineLanguage } from 'react-icons/md'


function FlexMovieItems({movies}) {
  return (
    <>
    <div className="flex items-center gap-1">
        <TbCategory className="text-subMain w-5 h-5" />
        <span className="text-sm font-medium">{movies?.category}</span>
        </div>

    <div className="flex items-center gap-1">
        <SlCalender className="text-subMain w-5 h-5" />
        <span className="text-sm font-medium">{movies?.year}</span>
        </div>

        <div className="flex items-center gap-1">
        <BiTimeFive className="text-subMain w-5 h-5" />
        <span className="text-sm font-medium">{movies?.time} Hrs</span>
        </div>

        </>
  )
}

export default FlexMovieItems
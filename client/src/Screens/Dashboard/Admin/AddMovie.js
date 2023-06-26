import React from 'react'
import SideBar from '../../Dashboard/SideBar'
import { Input } from '../../../Components/UserInputs';
import Uploader from '../../../Components/Uploader';
import { Select } from '../../../Components/UserInputs';
import { CategoriesData } from '../../../Data/CategoriesData';


function AddMovie() {
  return (
    <SideBar>
        <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>Create Movie</h2>
        <div className='w-full grid md:grid-cols-2 gap-6'>
        <Input label="Movie Title" type="text" placeholder="Game Of Thrones" bg={true} />
        <Input label="Movie Time" type="text" placeholder="2hrs 45min" bg={true} />
        </div>
        <div className='w-full grid md:grid-cols-2 gap-6'>
        <Input label="Movie Language" type="text" placeholder="English" bg={true} />
        <Input label="Movie Year" type="number" placeholder="2019" bg={true} />
        </div>

        {/* IMAGES */}
        <div className='w-full grid md:grid-cols-2 gap-6'>
        {/* IMAGE WITHOUT TITLE */}
        <div className='flex flex-col gap-2'>
          <p className='text-border font-semibold text-sm'>
            Image without Title
          </p>
          <Uploader />
          <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
            <img src='/images/movies/gft.jpg' alt='' className='w-full h-full object-cover rounded' />
          </div>
          <div>

          </div>
        </div>
        {/* IMAGE WITH TITLE */}
        <div className='flex flex-col gap-2'>
          <p className='text-border font-semibold text-sm'>
            Image with Title
          </p>
          <Uploader />
          <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
            <img src='/images/movies/movie1.jpg' alt='' className='w-full h-full object-cover rounded' />
          </div>
          <div>
          </div>
        </div>
        </div>
        {/* DIRECTOR */}
        <Input label="Movie Director" type="text" placeholder="Ratan Chodi" bg={true} />
        {/* DESCRIPTION */}
        <Input label="Movie Descripton" type="text" placeholder="Make it short & sweet" bg={true} />
        {/* CATEGORY */}
        <div className='text-sm w-full'>
        <Select label="Movie Category" options={CategoriesData} />
        </div>
        {/* MOVIE VIDEO */}
        <div className='flex flex-col gap-2 w-full '>
          <label className='text-border font-semibold text-sm'>
            Movie Video
          </label>
          <Uploader />
          </div>
          {/* SUBMIT */}
          
        <div className='flex justify-end items-center my-4'>
        <button className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white px-6 py-3 rounded w-full sm:w-auto '>Save Changes</button>
        </div>
        </div>
    </SideBar>
  )
}

export default AddMovie
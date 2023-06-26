import React from 'react'
import FlexMovieItems from '../FlexMovieItems'
import { FaHeart, FaPlay, FaShareAlt, FaDownload} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Ratings from '../Ratings'


function MovieINFO({movie, setModelOpen}) {
  return (
    <div className='w-full xl:h-screen relative text-white'>
      {/* Background Image */}
      <img src={`/images/movies/${movie?.poster}`} alt={movie.id} 
      className='w-full hidden xl:inline-block h-full object-cover' />
      <div className='xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0'>
        <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-2 gap-8'>
          <div className='xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden'>
            <img src={`/images/movies/${movie?.titleimg}`} alt={movie?.id} className='w-full h-full object-cover' />
          </div>
          <div className='col-span-2 md:grid grid-cols-5 gap-4 items-center'>
            <div className='col-span-3 flex flex-col gap-10'>
              {/* Title */}
              <h1 className='xl:text-4xl capitalize font-sans text-2xl font-bold'>
                {movie?.name}
              </h1>
              {/* Flex items */}
              <div className='flex items-center gap-4 font-medium text-dryGray'>
                  <div className='flex-colo bg-subMain text-xs px-2 py-1'>
                      HD 4K
                  </div>
                  <FlexMovieItems movies={movie && movie} />
                  {/* <div className="flex items-center gap-1">
        <MdOutlineLanguage className="text-subMain w-5 h-5" />
        <span className="text-sm font-medium">{movie?.language}</span>
        </div>  */}
              </div>
              
              {/* Description */}
              <p className='text-text text-sm leading-7 sm:max-lines-3 break-words'>
  {movie?.desc}
</p>

              
  <div className='grid sm:grid-row-5 grid-row-3 gap-5 p-4 bg-main border border-gray-800 rounded-lg'>
  {/* Director */}
  <div className='flex flex-row items-center gap-2'>
    <h1 className='text-subMain font-medium text-sm'>Director:</h1>
    <div className='flex items-center gap-4'>
      <h1 className='text-text font-medium text-sm'>{movie?.director}</h1>
    </div>
  </div>

  {/* Language */}
  <div className='flex flex-row items-center gap-2'>
    <h1 className='text-subMain font-medium text-sm'>Language:</h1>
    <div className='flex items-center gap-2'>
      <h1 className='text-text font-medium text-sm'>{movie?.language}</h1>
    </div>
  </div>

  {/* Age */}
  <div className='flex flex-row items-center gap-2'>
    <h1 className='text-subMain font-medium text-sm'>Age:</h1>
    <div className='flex items-center gap-2'>
      <h1 className='text-text font-medium text-sm'>{movie?.agelimit}+</h1>
    </div>
  </div>

  {/* Ratings */}
  <div className='flex flex-row items-center gap-2'>
    <h1 className='text-subMain font-medium text-sm'>Ratings:</h1>
    <div className='flex items-center gap-1 text-yellow-400'>
      <Ratings value={movie?.ratings} />
    </div>
  </div>
</div>



              <div className='grid sm:grid-cols-5 grid-cols-3 gap-4 p-6  bg-main border border-gray-800 rounded-lg'>
                {/* share */}
                <div className='col-span-1 flex-colo border-r border-border'>
                  <button onClick={() => setModelOpen(true)} className='w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20'>
                    <FaShareAlt style={{marginLeft: '10px'}}/>
                  </button>
                </div>
                {/* favourite */}
                <div className='col-span-1 pl-2 flex-colo border-r border-border'>
                  <button className='w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20'>
                    <FaHeart style={{marginLeft: '12px'}}/>
                  </button>
                </div>
                {/* download */}
                <div className='col-span-1 pl-2 flex-colo border-r border-border'>
                  <button className='w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20'>
                    <FaDownload style={{marginLeft: '12px'}}/>
                  </button>
                </div>
                {/* play */}
                <div className='sm:col-span-2 col-span-3 flex justify-end font-medium text-sm'>
                  <Link to={`/playing/${movie?.id}`} className='bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3 '>
                    <FaPlay className='w-3 h-3'/> Watch 
                  </Link>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieINFO
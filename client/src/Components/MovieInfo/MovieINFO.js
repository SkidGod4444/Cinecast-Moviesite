import React, { useState } from 'react'
import FlexMovieItems from '../FlexMovieItems'
import { FaHeart, FaPlay, FaShareAlt, FaDownload} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Ratings from '../Ratings'
import { useDispatch, useSelector } from 'react-redux'
import { FavoriteMovie, IsFavorite } from '../../Context/Functionalities'
import { toast } from 'react-hot-toast'


function MovieINFO({movie, setModelOpen}) {
  const dispatch = useDispatch();
  const {isLoading:FavouritesLoading} = useSelector(state => state.UserAddFavoriteMovies)
  const {userInfo} = useSelector(state => state.UserLogin)
  const IsInFavorite = IsFavorite(movie)

  const [progress, setProgress] = useState(0);

const handleDownload = async () => {
  try {
    const response = await fetch(movie.video);
    const blob = await response.blob();
    const videoURL = URL.createObjectURL(blob);
    
    // Start downloading the video
    const anchor = document.createElement('a');
    anchor.href = videoURL;
    anchor.download = movie.name;
    anchor.click();

    // Show toast loading with downloading progress
    toast.loading(`Downloading... ${progress}%`, {
      id: 'download',
      duration: 1000000000,
      position: 'bottom-left',
      style: {
        background: '#0B0F29',
        color: '#fff',
        borderRadius: '10px',
        border: '.5px solid #F20000',
        padding: '16px',
      },
    });

    // Update progress and dismiss toast when download is complete
    const downloadProgress = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
      if (progress >= 100) {
        clearInterval(downloadProgress);
        toast.dismiss('download');
      }
    }, 100);
  } catch (error) {
    console.error('Error downloading video:', error);
    toast.error('Error downloading video');
  }
};

  return (
    <div className='w-full xl:h-screen relative text-white'>
      {/* Background Image */}
      <img src={movie?.poster ? movie.poster : `/images/userdp.jpg`} alt={movie?._id} 
      className='w-full hidden xl:inline-block h-full object-cover' />
      <div className='xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0'>
        <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-2 gap-8'>
          <div className='xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden'>
            <img src={movie?.titleimg ? movie?.titleimg  : `/images/userdp.jpg`} alt={movie?._id} className='w-full h-full object-cover' />
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
                  <button onClick={() => setModelOpen(true)} className='w-10 h-10 hover:text-subMain flex-colo rounded-lg bg-white bg-opacity-20'>
                    <FaShareAlt style={{marginLeft: '10px'}}/>
                  </button>
                </div>
                {/* favourite */}
                <div className='col-span-1 pl-2 flex-colo border-r border-border'>
                <button 
              onClick={() => FavoriteMovie(movie, dispatch, userInfo)}
              disabled={IsInFavorite || FavouritesLoading}
              className={`bg-white
              ${IsInFavorite ? 'text-subMain' : ''} 
              w-10 h-10 flex-colo rounded-lg bg-opacity-20`}>
                <FaHeart style={{marginLeft: '12px'}}/>
              </button>
                </div>
                {/* download */}
                <div className='col-span-1 pl-2 flex-colo border-r border-border'>
                <button 
              disabled={progress > 0 && progress < 100}
              onClick={handleDownload}
                  className='w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20'>
                    <FaDownload style={{marginLeft: '12px'}}/>
                  </button>
                </div>
                {/* play */}
                <div className='sm:col-span-2 col-span-3 flex justify-end font-medium text-sm'>
                  <Link to={`/playing/${movie?._id}`} className='bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3 '>
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
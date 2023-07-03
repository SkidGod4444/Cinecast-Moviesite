import React, { useContext, useEffect } from 'react';
import Layout from '../Layout/Layout';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaDownload, FaHeart, FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { GetMovieByIdAction } from '../Redux/Actions/MoviesActions';
import Loader from '../Components/Notifications/LoaderN';
import { Empty } from '../Components/Notifications/EmptyN';
import { DownloadVideo, FavoriteMovie, IsFavorite } from '../Context/Functionalities';
import { SidebarContext } from '../Context/DrawerContext'
import FileSaver from 'file-saver'


function WatchScreen() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const sameClass = 'w-full gap-6 flex justify-center items-center flex-colo min-h-screen'
  const {isLoading, isError, movie} = useSelector((state) => state.GetMovieById);
  const [playing, setPlaying] = useState(false);

  const {isLoading:FavouritesLoading} = useSelector(state => state.UserAddFavoriteMovies)
  const {userInfo} = useSelector(state => state.UserLogin)
  const IsInFavorite = (movie) => {
    return IsFavorite(movie)
}
const {
  progress,
  setprogress
} = useContext(SidebarContext);

// download movie functionality
const DownloadMovieVideo = async (videoURL, name) => {
  await DownloadVideo(videoURL,setprogress)
  .then((data) => {
    setprogress(0)
    FileSaver.saveAs(data, name);
  })
}
    // use Effect
    useEffect(() => {
    // movie by id 
    dispatch(GetMovieByIdAction(id))
    },[dispatch, id])
  return (
    <Layout>
      <div className='container mx-auto bg-dry p-6 mb-12'>
      {
            !isError && ( <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
            <Link
              to={`/movies/${movie?._id}`}
              className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'
            >
              <BiArrowBack /> {movie?.name}
            </Link>
            <div className='flex-btn sm:w-auto w-full gap-5'>
              <button 
              onClick={() => FavoriteMovie(movie, dispatch, userInfo)}
              disabled={IsInFavorite(movie) || FavouritesLoading}
              className={`bg-white 
              ${IsInFavorite(movie) ? 'text-subMain' : 'text-white'} 
              transitions bg-opacity-30 rounded px-4 py-3 text-sm`}>
                <FaHeart />
              </button>
              <button 
              disabled={progress > 0 && progress < 100}
              onClick={() => DownloadMovieVideo(movie?.video, movie?.name)}
              className='bg-subMain flex-rows gap-2 hover:text-main transitions text-white rounded px-8 py-3 font-medium text-sm'>
                <FaDownload /> Download
              </button>
            </div>
          </div>)
          }
        
        {/* play video */}
        {playing ? (
          <video controls autoPlay={playing} className='w-full h-full rounded'>
            <source
              src={movie?.video}
              type='video/mp4'
              title={movie?._id}
            />
          </video>
        ) : (
          <div className='w-full h-full rounded-lg overflow-hidden relative'>
            {
              isLoading ? (
              <div className={sameClass}>
                <Loader />
              </div> 
              )
              :
              isError ? ( <div className={sameClass}>
                <Empty message='It seems like Database not found!'/>
              </div> 
              ) : (
              <>
              <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex items-center justify-center'>
              <button
                onClick={() => setPlaying(true)}
                className='bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl'
              >
                <FaPlay className='w-9 h-9 ml-6' />
              </button>
            </div>
            <div className='w-full h-40 md:h-screen rounded-lg overflow-hidden'>
              <img
                src={movie?.poster ? movie.poster : ''}
                alt={movie?._id}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
            </>
              )
            
            }
            
          </div>
        )}
      </div>
          </Layout>
  );
}

export default WatchScreen;

import React from 'react';
import Layout from '../Layout/Layout';
import { movies } from '../Data/MovieData';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaDownload, FaHeart, FaPlay } from 'react-icons/fa';

function WatchScreen() {
  const movie = movies.find((movie) => movie.id);
  const [playing, setPlaying] = useState(false);

  return (
    <Layout>
      <div className='container mx-auto bg-dry p-6 mb-12'>
        <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
          <Link
            to={`/movies/${movie?.id}`}
            className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'
          >
            <BiArrowBack /> {movie?.name}
          </Link>
          <div className='flex-btn sm:w-auto w-full gap-5'>
            <button className='bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm'>
              <FaHeart />
            </button>
            <button className='bg-subMain flex-rows gap-2 hover:text-main transitions text-white rounded px-8 py-3 font-medium text-sm'>
              <FaDownload /> Download
            </button>
          </div>
        </div>
        {/* play video */}
        {playing ? (
          <video controls autoPlay={playing} className='w-full h-full rounded'>
            <source
              src={`/images/${movie?.video}`}
              type='video/mp4'
              title={movie?.id}
            />
          </video>
        ) : (
          <div className='w-full h-full rounded-lg overflow-hidden relative'>
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
                src={movie?.poster ? `/images/movies/${movie.poster}` : ''}
                alt={movie?.id}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          </div>
        )}
      </div>
          </Layout>
  );
}

export default WatchScreen;

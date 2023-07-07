import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { Link, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaDownload, FaHeart, FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { GetMovieByIdAction } from '../Redux/Actions/MoviesActions';
import Loader from '../Components/Notifications/LoaderN';
import { Empty } from '../Components/Notifications/EmptyN';
import { FavoriteMovie, IsFavorite } from '../Context/Functionalities';
import { toast } from 'react-hot-toast';

function WatchScreen() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const sameClass = 'w-full gap-6 flex justify-center items-center flex-colo min-h-screen';
  const { isLoading, isError, movie } = useSelector((state) => state.GetMovieById);
  const [playing, setPlaying] = useState(false);
  const { isLoading: FavouritesLoading } = useSelector((state) => state.UserAddFavoriteMovies);
  const { userInfo } = useSelector((state) => state.UserLogin);
  const IsInFavorite = (movie) => {
    return IsFavorite(movie);
  };

  useEffect(() => {
    dispatch(GetMovieByIdAction(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <div className="container mx-auto bg-transparent p-6 mb-12">
        {!isError && (
          <div className="flex-btn flex-wrap mb-6 gap-2 bg-transparent rounded border border-border p-6">
            <Link to={`/movies/${movie?._id}`} className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray">
              <BiArrowBack /> Back
            </Link>
            <div className="flex-btn sm:w-auto w-full gap-5">
            <button
                      onClick={() => FavoriteMovie(movie, dispatch, userInfo)}
                      disabled={IsInFavorite(movie) || FavouritesLoading}
                      className={`bg-white ${
                        IsInFavorite(movie) ? 'text-subMain' : 'text-white'
                      } transitions bg-opacity-30 rounded px-4 py-3 text-sm`}
                    >
                      <FaHeart />
                    </button>
              <button className="bg-subMain flex-rows gap-2 hover:text-main transitions text-white rounded px-8 py-3 font-medium text-sm">
                <FaDownload /> Download
              </button>
            </div>
          </div>
        )}

        {/* Play video */}
        {playing ? (
          <video controls autoPlay={playing} className="w-full h-full rounded" controlsList="nodownload">
            <source src={movie?.video} type="video/mp4" title={movie?._id} />
          </video>
        ) : (
          <div className="w-full h-full rounded-lg overflow-hidden relative">
            {isLoading ? (
              <div className={sameClass}>
                <Loader />
              </div>
            ) : isError ? (
              <div className={sameClass}>
                <Empty message="It seems like Database not found!" />
              </div>
            ) : (
              <>
                <div className="absolute top-50 left-10 bottom-5 right-50 bg-transparent bg-opacity-30 flex items-center justify-center">
                  <>
                    <button
                      onClick={() => setPlaying(true)}
                      className="bg-white hover:bg-subMain transitions text-white px-8 py-3 rounded bg-opacity-30 font-medium sm:text-sm text-xs"
                    >
                      Play
                    </button>
                    
                  </>
                </div>
                <div className="w-full h-40 md:h-screen rounded-lg overflow-hidden">
                  <img
                    src={movie?.poster ? movie.poster : ''}
                    alt={movie?._id}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default WatchScreen;

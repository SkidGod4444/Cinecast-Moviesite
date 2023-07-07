import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import MovieINFO from '../Components/MovieInfo/MovieINFO'
import Titles from '../Components/Titles'
import { MdOutlineCollectionsBookmark } from 'react-icons/md'
import Movie from '../Components/Movie'
import ShareModals from '../Components/Modals/ShareModals'
import { useDispatch, useSelector } from 'react-redux'
import { GetMovieByIdAction } from '../Redux/Actions/MoviesActions'
import Loader from '../Components/Notifications/LoaderN';
import {Empty} from '../Components/Notifications/EmptyN';
// import { SidebarContext } from '../Context/DrawerContext'
// import { DownloadVideo } from '../Context/Functionalities'
// import FileSaver from 'file-saver'


function MovieInfo() {
  const [modelOpen, setModelOpen] = React.useState(false);
  // const { progress, setprogress } = useContext(SidebarContext);
  const {id} = useParams();
  const dispatch = useDispatch();
  const sameClass = 'w-full gap-6 flex justify-center items-center flex-colo min-h-screen'
  
  const {isLoading, isError, movie} = useSelector((state) => state.GetMovieById);
  const {movies} = useSelector((state) => state.GetAllMovies);
  const RelatedMovies = movies?.filter((m) => m.category === movie?.category );

  // // download movie functionality
  // const DownloadMovieVideo = async (videoURL, name) => {
  //   await DownloadVideo(videoURL,setprogress)
  //   .then((data) => {
  //     setprogress(0)
  //     FileSaver.saveAs(data, name);
  //   })
  // }
  // use Effect
  useEffect(() => {
  // movie by id 
  dispatch(GetMovieByIdAction(id))
  },[dispatch, id])

  return (
    <Layout>
      {
        isLoading ? <div className={sameClass}>
          <Loader />
        </div>
        :
        isError ? <div className={sameClass}>
          <Empty message='It seems like Database not found!'/>
        </div>
        : (
          <>
          <ShareModals modelOpen={modelOpen} setModelOpen={setModelOpen} movie={movie} />
      <MovieINFO movie={movie} setModelOpen={setModelOpen}/>
      {/* related movies */}
      <div className='my-16'>
        <Titles title='Related Movies' Icon={MdOutlineCollectionsBookmark}/>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {RelatedMovies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
          </>
        )
      }
      
      </Layout>
  )
    }

export default MovieInfo
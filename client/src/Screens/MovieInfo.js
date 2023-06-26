import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import {movies} from '../Data/MovieData'
import MovieINFO from '../Components/MovieInfo/MovieINFO'
import Titles from '../Components/Titles'
import { MdOutlineCollectionsBookmark } from 'react-icons/md'
import Movie from '../Components/Movie'
import ShareModals from '../Components/Modals/ShareModals'


function MovieInfo() {
  const [modelOpen, setModelOpen] = React.useState(false);
  const {id} = useParams();
  const movie = movies.find(movie => movie.id === id);
  const RelatedMovies = movies.filter(
  (m) => m.category === movie.category );
  
  return (
    <Layout>
      <ShareModals modelOpen={modelOpen} setModelOpen={setModelOpen} movie={movie} />
      <MovieINFO movie={movie} setModelOpen={setModelOpen} />
      {/* related movies */}
      <div className='my-16'>
        <Titles title='Related Movies' Icon={MdOutlineCollectionsBookmark}/>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {RelatedMovies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
      </Layout>
  )
}

export default MovieInfo
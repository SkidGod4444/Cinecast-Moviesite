import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Home/Banner'
import PopularMovies from '../Components/Home/PopularMovies'
import TopRated from '../Components/Home/TopRated'
import Promos from '../Components/Home/Promos'
import MostWatched from '../Components/Home/MostWatched'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllMoviesAction, GetRandomMoviesAction, GetTopRatedMoviesAction } from '../Redux/Actions/MoviesActions'
import { toast } from 'react-hot-toast'
import HomeView from '../Components/Home/HomeView'

function HomeScreen() {
  const dispatch = useDispatch()
  const { isLoading:randomLoading, isError:randomError, movies:randomMovies } = useSelector(
    (state) => state.GetRandomMovies);
  const { isLoading:topLoading, isError:topError, movies:topMovies } = useSelector(
    (state) => state.GetTopRatedMovies);
    const { isLoading, isError, movies } = useSelector(
    (state) => state.GetAllMovies);


    // useEffect 
    useEffect(() => {
      // dispatch random movies
      dispatch(GetRandomMoviesAction())
      // dispatch all movies
      dispatch(GetAllMoviesAction({}))
      // dispatch top rated movies
      dispatch(GetTopRatedMoviesAction())
      // errors
      if (isError || randomError || topError){
        toast.error(isError || randomError || topError)
      }
        }, [dispatch, isError, randomError, topError])
  return (
    <Layout>
      <div className='container mx-auto min-h-screen px-2 mb-6'>
        <Banner movies={movies} isLoading={isLoading}/>
        <HomeView />
        <PopularMovies movies={randomMovies} isLoading={randomLoading}/>
        <MostWatched movies={topMovies} isLoading={topLoading}/>
        <Promos />
        <TopRated movies={topMovies} isLoading={topLoading}/>
        
      </div>
    </Layout>
  )
}

export default HomeScreen

import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { FavoriteMovie, IsFavorite } from '../Context/Functionalities'

function Movie({movie}) {
  const {isLoading} = useSelector(state => state.UserAddFavoriteMovies)
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state => state.UserLogin)

    // check if movie is in favorites
    const IsInFavorite = IsFavorite(movie)
    

  return (
    <>
    <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
      <Link to={`/movies/${movie?._id}`} className="w-full">
        <img src={movie?.poster ? movie.poster : '/images/userdp.jpg'} alt={movie?.name} className="w-full h-64 object-cover"/>
      </Link>
      <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-70 text-white px-4 py-3'>
        <h3 className=" font-semibold truncate">{movie?.name}</h3>
        <button 
        onClick={() => FavoriteMovie(movie, dispatch, userInfo)}
        disabled={IsInFavorite || isLoading}
        className={`bg-white
        ${IsInFavorite ? 'text-subMain' : 'text-white'}
        transitions px-4 py-3 rounded text-sm bg-opacity-30`}>
                                            <FaHeart />
                                            </button>
      </div>
    </div>
    </>
  )
}

export default Movie
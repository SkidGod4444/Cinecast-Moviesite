import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { AddFavouriteMoviesAction } from '../Redux/Actions/UserActions';

// check if movie is in favorites
const IsFavorite = (movie) => {
    const {favourite} = useSelector(state => state.UserGetFavoriteMovies)
    return favourite?.find(favourite => favourite?._id === movie?._id)
}

// favorite movie functionality
const FavoriteMovie = (movie, dispatch, userInfo) => {
    return !userInfo 
    ? toast.error('Please login to add favorites') 
    : dispatch(AddFavouriteMoviesAction({
        MovieId: movie?._id,
    }))
}

export { IsFavorite, FavoriteMovie }
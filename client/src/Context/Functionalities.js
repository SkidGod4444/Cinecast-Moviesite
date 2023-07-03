import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { AddFavouriteMoviesAction } from '../Redux/Actions/UserActions';
import Axios from '../Redux/Apis/Axios';
import { IoMdCloudDownload } from 'react-icons/io'


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


// download movie functionality
const DownloadVideo = async (videoURL, setProgress) => {
    if (typeof videoURL !== 'string') {
        throw new Error('Invalid videoURL');
      }
    const { data } = await Axios.get({
        url: videoURL,
        responseType: 'blob',
        onDownloadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            let percent = Math.floor((loaded * 100) / total);
            setProgress(percent);
            if (percent > 0 && percent < 100) {
            toast.loading(`Downloading... ${percent}%`, {
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
                icon: <IoMdCloudDownload className='text-2xl mr-2 text-subMain' />,
            });
            } else {
            toast.dismiss('download');
            }
        },
        });
        return data;
    };
    
export { IsFavorite, FavoriteMovie, DownloadVideo }
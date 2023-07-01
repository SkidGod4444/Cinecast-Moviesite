import * as MoviesConstants from '../Constants/MoviesConstants';

// get all movies
export const MoviesListReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case MoviesConstants.MOVIES_LIST_REQUEST:
            return { isLoading: true,};
        case MoviesConstants.MOVIES_LIST_SUCCESS:
            return { 
                isLoading: false, 
                movies: action.payload.movies,
                pages: action.payload.pages,
                page: action.payload.page,
                totalMovies: action.payload.totalMovies,};
        case MoviesConstants.MOVIES_LIST_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
}

// get random movies
export const MoviesRandomReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case MoviesConstants.MOVIES_RANDOM_REQUEST:
            return { isLoading: true,};
        case MoviesConstants.MOVIES_RANDOM_SUCCESS:
            return { isLoading: false, movies: action.payload };
        case MoviesConstants.MOVIES_RANDOM_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
}

// get top rated movies
export const MoviesTopRatedReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case MoviesConstants.MOVIES_TOPRATED_REQUEST:
            return { isLoading: true,};
        case MoviesConstants.MOVIES_TOPRATED_SUCCESS:
            return { isLoading: false, movies: action.payload };
        case MoviesConstants.MOVIES_TOPRATED_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
}

// get movie by id
export const MoviesDetailsReducer = (state = { movie: {} }, action) => {
    switch (action.type) {
        case MoviesConstants.MOVIES_DETAILS_REQUEST:
            return { isLoading: true,};
        case MoviesConstants.MOVIES_DETAILS_SUCCESS:
            return { isLoading: false, movie: action.payload };
        case MoviesConstants.MOVIES_DETAILS_FAIL:
            return { isLoading: false, isError: action.payload };
        case MoviesConstants.MOVIES_DETAILS_RESET:
            return { movie: {} };
        default:
            return state;
    }
}
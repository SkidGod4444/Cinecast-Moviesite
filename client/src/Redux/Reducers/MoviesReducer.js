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

// delete movie by id
export const DeleteMovieReducer = (state = {}, action) => {
    switch (action.type) {
        case MoviesConstants.DELETE_MOVIE_REQUEST:
            return { isLoading: true,};
        case MoviesConstants.DELETE_MOVIE_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case MoviesConstants.DELETE_MOVIE_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
}

// delete all movies
export const DeleteAllMoviesReducer = (state = {}, action) => {
    switch (action.type) {
        case MoviesConstants.DELETE_ALL_MOVIES_REQUEST:
            return { isLoading: true,};
        case MoviesConstants.DELETE_ALL_MOVIES_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case MoviesConstants.DELETE_ALL_MOVIES_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
}

// create movie
export const CreateMovieReducer = (state = {}, action) => {
    switch (action.type) {
        case MoviesConstants.CREATE_MOVIE_REQUEST:
            return { isLoading: true,};
        case MoviesConstants.CREATE_MOVIE_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case MoviesConstants.CREATE_MOVIE_FAIL:
            return { isLoading: false, isError: action.payload };
        case MoviesConstants.CREATE_MOVIE_RESET:
            return {};
        default:
            return state;
    }
}

// update movie
export const UpdateMovieReducer = (state = {}, action) => {
    switch (action.type) {
        case MoviesConstants.UPDATE_MOVIE_REQUEST:
            return { isLoading: true,};
        case MoviesConstants.UPDATE_MOVIE_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case MoviesConstants.UPDATE_MOVIE_FAIL:
            return { isLoading: false, isError: action.payload };
        case MoviesConstants.UPDATE_MOVIE_RESET:
            return {};
        default:
            return state;
    }
}
import * as MoviesConstants from '../Constants/MoviesConstants';
import * as MoviesAPIs from '../Apis/MoviesServices';
import toast from 'react-hot-toast';
import { ErrorsAction, TokenProtection } from '../Protection';


// Action to get all movies

export const GetAllMoviesAction = ({
    category ="",
    time ="",
    language ="",
    ratings ="",
    year ="",
    search ="",
    agelimit ="",
    pageNumber ="",
}) => async (dispatch) => {
    try {
        dispatch({ type: MoviesConstants.MOVIES_LIST_REQUEST });
        const reponse = await MoviesAPIs.getAllMoviesServces(
            category,
            time,
            language,
            ratings,
            year,
            search,
            agelimit,
            pageNumber,

        )
        dispatch({ type: MoviesConstants.MOVIES_LIST_SUCCESS, payload: reponse });

    } catch (error) {
        ErrorsAction(error, dispatch, MoviesConstants.MOVIES_LIST_FAIL);
    }
}

// Action to get random movies

export const GetRandomMoviesAction = () => async (dispatch) => {
    try {
        dispatch({ type: MoviesConstants.MOVIES_RANDOM_REQUEST });
        const reponse = await MoviesAPIs.getRandomMoviesServces();
        dispatch({ type: MoviesConstants.MOVIES_RANDOM_SUCCESS, payload: reponse });

    } catch (error) {
        ErrorsAction(error, dispatch, MoviesConstants.MOVIES_RANDOM_FAIL);
    }
}

// Action to get top rated movies

export const GetTopRatedMoviesAction = () => async (dispatch) => {
    try {
        dispatch({ type: MoviesConstants.MOVIES_TOPRATED_REQUEST });
        const reponse = await MoviesAPIs.getTopRatedMoviesServces();
        dispatch({ type: MoviesConstants.MOVIES_TOPRATED_SUCCESS, payload: reponse });

    } catch (error) {
        ErrorsAction(error, dispatch, MoviesConstants.MOVIES_TOPRATED_FAIL);
    }
}

// Action to get movie by id

export const GetMovieByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: MoviesConstants.MOVIES_DETAILS_REQUEST });
        const reponse = await MoviesAPIs.getMovieByIdServces(id);
        dispatch({ type: MoviesConstants.MOVIES_DETAILS_SUCCESS, payload: reponse });

    } catch (error) {
        ErrorsAction(error, dispatch, MoviesConstants.MOVIES_DETAILS_FAIL);
    }
}

// Action to delete movie

export const DeleteMovieAction = (id) => async (dispatch, token) => {
    try {
        dispatch({ type: MoviesConstants.DELETE_MOVIE_REQUEST });
        const reponse = await MoviesAPIs.deleteMovieServices(
            TokenProtection(token), id);
        dispatch({ type: MoviesConstants.DELETE_MOVIE_SUCCESS, payload: reponse });
        toast.success("Movie deleted successfully");
        dispatch(GetAllMoviesAction({}));
    } catch (error) {
        ErrorsAction(error, dispatch, MoviesConstants.DELETE_MOVIE_FAIL);
    }
}

// Action to delete all movies

export const DeleteAllMoviesAction = () => async (dispatch, token) => {
    try {
        dispatch({ type: MoviesConstants.DELETE_ALL_MOVIES_REQUEST });
        const reponse = await MoviesAPIs.deleteAllMoviesServices(
            TokenProtection(token));
        dispatch({ type: MoviesConstants.DELETE_ALL_MOVIES_SUCCESS, payload: reponse });
        toast.success("All Movies deleted successfully");
        dispatch(GetAllMoviesAction({}));
    } catch (error) {
        ErrorsAction(error, dispatch, MoviesConstants.DELETE_ALL_MOVIES_FAIL);
    }
}

// Action to create movie

export const CreateMovieAction = (movie) => async (dispatch, token) => {
    try {
        dispatch({ type: MoviesConstants.CREATE_MOVIE_REQUEST });
        const reponse = await MoviesAPIs.createMovieServices(
            TokenProtection(token), movie);
        dispatch({ type: MoviesConstants.CREATE_MOVIE_SUCCESS, payload: reponse });
        toast.success("Movie created successfully");
        // dispatch(GetAllMoviesAction({}));
    } catch (error) {
        ErrorsAction(error, dispatch, MoviesConstants.CREATE_MOVIE_FAIL);
    }
}

// Action to update movie

export const UpdateMovieAction = (id, movie) => async (dispatch, token) => {
    try {
        dispatch({ type: MoviesConstants.UPDATE_MOVIE_REQUEST });
        const reponse = await MoviesAPIs.updateMovieServices(
            TokenProtection(token), id, movie);
        dispatch({ type: MoviesConstants.UPDATE_MOVIE_SUCCESS, payload: reponse });
        toast.success("Movie updated successfully");
        dispatch(GetMovieByIdAction(id));
    } catch (error) {
        ErrorsAction(error, dispatch, MoviesConstants.UPDATE_MOVIE_FAIL);
    }
}
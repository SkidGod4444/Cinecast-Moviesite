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
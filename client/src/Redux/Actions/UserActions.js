import * as UserConstants from '../Constants/UserConstants';
import * as UserApi from '../Apis/UserServices';
import { toast } from 'react-hot-toast';
import { ErrorsAction, TokenProtection } from '../Protection';

// Login Action
const LoginAction = (user) => async (dispatch) => {
    try {
        dispatch({ type: UserConstants.USER_LOGIN_REQUEST });
        const { data } = await UserApi.loginService(user);
        dispatch({ type: UserConstants.USER_LOGIN_SUCCESS, payload: data });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.USER_LOGIN_FAIL);
    }
    };

// Register Action
const RegisterAction = (user) => async (dispatch) => {
    try {
        dispatch({ type: UserConstants.USER_REGISTER_REQUEST });
        const { data } = await UserApi.registerService(user);
        dispatch({ type: UserConstants.USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: UserConstants.USER_LOGIN_SUCCESS, payload: data });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.USER_REGISTER_FAIL);
    }
}

// Logout Action
const LogoutAction = () => (dispatch) => {
    UserApi.logoutService();
    dispatch({ type: UserConstants.USER_LOGOUT });
    dispatch({ type: UserConstants.USER_LOGIN_RESET });
    dispatch({ type: UserConstants.USER_REGISTER_RESET });
    toast.success('Logged out successfully');

}

//update profile action
const UpdateProfileAction = (user) => async (dispatch, token) => {
    try {
        dispatch({ type: UserConstants.USER_UPDATE_PROFILE_REQUEST });
        const response = await UserApi.updateProfileService(user, TokenProtection(token));
        dispatch({ type: UserConstants.USER_UPDATE_PROFILE_SUCCESS, payload: response });
        toast.success('Profile updated successfully');
        dispatch({ type: UserConstants.USER_LOGIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.USER_UPDATE_PROFILE_FAIL);
    }
};

// delete profile action
const DeleteProfileAction = () => async (dispatch, token) => {
    try {
        dispatch({ type: UserConstants.USER_DELETE_PROFILE_REQUEST });
        const response = await UserApi.deleteProfileService(TokenProtection(token));
        dispatch({ type: UserConstants.USER_DELETE_PROFILE_SUCCESS, payload: response });
        toast.success('Profile deleted successfully');
        dispatch(LogoutAction());
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.USER_DELETE_PROFILE_FAIL);
        
    }
};

// change password action
const ChangePasswordAction = (passwords) => async (dispatch, token) => {
    try {
        dispatch({ type: UserConstants.USER_CHANGE_PASSWORD_REQUEST });
        const response = await UserApi.changePasswordService(passwords, TokenProtection(token));
        dispatch({ type: UserConstants.USER_CHANGE_PASSWORD_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.USER_CHANGE_PASSWORD_FAIL);
        
    }
};

// get favorites action
const GetFavoriteMoviesAction = () => async (dispatch, token) => {
    try {
        dispatch({ type: UserConstants.GET_FAVORITES_REQUEST });
        const response = await UserApi.getFavoriteMovies(TokenProtection(token));
        dispatch({ type: UserConstants.GET_FAVORITES_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.GET_FAVORITES_FAIL);

    }
};

// delete favorites action
const DeleteFavouriteMoviesAction = () => async (dispatch, token) => {
    try {
        dispatch({ type: UserConstants.DELETE_FAVORITES_REQUEST });
        await UserApi.deleteFavoriteMovies(TokenProtection(token));
        dispatch({ type: UserConstants.DELETE_FAVORITES_SUCCESS, });
        toast.success('Favorites removed successfully');
    } catch (error) {
        ErrorsAction(error, dispatch, UserConstants.DELETE_FAVORITES_FAIL);

    }
};


export { 
    LoginAction, 
    RegisterAction, 
    LogoutAction,
    UpdateProfileAction,
    DeleteProfileAction,
    ChangePasswordAction,
    GetFavoriteMoviesAction,
    DeleteFavouriteMoviesAction };
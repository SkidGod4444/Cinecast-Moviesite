import * as UserConstants from '../Constants/UserConstants';

// login 

export const UserLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_LOGIN_REQUEST:
            return { isLoading: true };
        case UserConstants.USER_LOGIN_SUCCESS:
            return { isLoading: false, userInfo: action.payload , isSuccess: true};
        case UserConstants.USER_LOGIN_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.USER_LOGIN_RESET:
            return {};
        case UserConstants.USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

// register

export const UserRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_REGISTER_REQUEST:
            return { isLoading: true };
        case UserConstants.USER_REGISTER_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true };
        case UserConstants.USER_REGISTER_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.USER_REGISTER_RESET:
            return {};
        default:
            return state;
    }
}

// update profile

export const UserUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_UPDATE_PROFILE_REQUEST:
            return { isLoading: true };
        case UserConstants.USER_UPDATE_PROFILE_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true };
        case UserConstants.USER_UPDATE_PROFILE_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.USER_UPDATE_PROFILE_RESET:
            return {};
        default:
            return state;
    }
}

// delete profile

export const UserDeleteProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_DELETE_PROFILE_REQUEST:
            return { isLoading: true };
        case UserConstants.USER_DELETE_PROFILE_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true };
        case UserConstants.USER_DELETE_PROFILE_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.USER_DELETE_PROFILE_RESET:
            return {};
        default:
            return state;
    }
}

// change password

export const UserChangePasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_CHANGE_PASSWORD_REQUEST:
            return { isLoading: true };
        case UserConstants.USER_CHANGE_PASSWORD_SUCCESS:
            return { isLoading: false, userInfo: action.payload, isSuccess: true, message: action.payload.message };
        case UserConstants.USER_CHANGE_PASSWORD_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.USER_CHANGE_PASSWORD_RESET:
            return {};
        default:
            return state;
    }
}

// get favorites

export const UserGetFavoriteMoviesReducer = (state = {
    favourite: [],
}, action) => {
    switch (action.type) {
        case UserConstants.GET_FAVORITES_REQUEST:
            return { isLoading: true };
        case UserConstants.GET_FAVORITES_SUCCESS:
            return { isLoading: false, favourite: action.payload };
        case UserConstants.GET_FAVORITES_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.GET_FAVORITES_RESET:
            return {};
        default:
            return state;
    }
}

// delete favorites

export const UserDeleteFavoriteMoviesReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.DELETE_FAVORITES_REQUEST:
            return { isLoading: true };
        case UserConstants.DELETE_FAVORITES_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case UserConstants.DELETE_FAVORITES_FAIL:
            return { isLoading: false, isError: action.payload };
        case UserConstants.DELETE_FAVORITES_RESET:
            return {};
        default:
            return state;
    }
}
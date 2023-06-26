import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as user from './Reducers/UserReducers';
const rootReducer = combineReducers({
    // reducers
    UserLogin : user.UserLoginReducer,
    UserRegister : user.UserRegisterReducer,
    UserUpdateProfile : user.UserUpdateProfileReducer,
    UserDeleteProfile : user.UserDeleteProfileReducer,
    UserChangePassword : user.UserChangePasswordReducer,
    UserGetFavoriteMovies : user.UserGetFavoriteMoviesReducer,
    UserDeleteFavoriteMovies : user.UserDeleteFavoriteMoviesReducer,
    AdminGetAllUsers : user.AdminGetAllUsersReducer,
    AdminDeleteUser : user.AdminDeleteUserReducer,
    
});

// get userinfo 
const UserInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

// initialState

const initialState = {
    UserLogin: { userInfo: UserInfoFromStorage },
};

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});
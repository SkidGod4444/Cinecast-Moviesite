import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as user from './Reducers/UserReducers';
import * as categories from './Reducers/CategoriesReducers';
import * as movies from './Reducers/MoviesReducer';

const rootReducer = combineReducers({
    // user reducers
    UserLogin : user.UserLoginReducer,
    UserRegister : user.UserRegisterReducer,
    UserUpdateProfile : user.UserUpdateProfileReducer,
    UserDeleteProfile : user.UserDeleteProfileReducer,
    UserChangePassword : user.UserChangePasswordReducer,
    UserGetFavoriteMovies : user.UserGetFavoriteMoviesReducer,
    UserDeleteFavoriteMovies : user.UserDeleteFavoriteMoviesReducer,
    UserAddFavoriteMovies : user.UserAddFavoriteMoviesReducer,
    AdminGetAllUsers : user.AdminGetAllUsersReducer,
    AdminDeleteUser : user.AdminDeleteUserReducer,
    
    // category reducers
    CategoryGetAll : categories.GetAllCategoriesReducer,
    CategoryCreate : categories.CreateCategoryReducer,
    CategoryDelete : categories.DeleteCategoryReducer,
    CategoryUpdate : categories.UpdateCategoryReducer,
    
    // movie reducers
    GetAllMovies: movies.MoviesListReducer,
    GetRandomMovies: movies.MoviesRandomReducer,
    GetTopRatedMovies: movies.MoviesTopRatedReducer,
    GetMovieById: movies.MoviesDetailsReducer,
    
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
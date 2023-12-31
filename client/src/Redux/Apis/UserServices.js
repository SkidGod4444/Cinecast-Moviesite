import Axios from "./Axios";

// ****************************** public ****************************** //

const registerService = async (user) => {
    const { data } = await Axios.post('/users', user);
    if (data) {
        localStorage.setItem('userInfo', JSON.stringify(data));
    }
    return data;
};

// logout service
const logoutService = async () => {
    localStorage.removeItem('userInfo');
    return null;
};

// login service
const loginService = async (user) => {
    const { data } = await Axios.post('/users/login', user);
    if (data) {
        localStorage.setItem('userInfo', JSON.stringify(data));
    }
    return data;
}

// ****************************** private ****************************** //

// Update profile 
const updateProfileService = async (user, token) => {
    const { data } = await Axios.put('/users', user, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (data) {
        localStorage.setItem('userInfo', JSON.stringify(data));
    }
    return data;
}


// Delete profile
const deleteProfileService = async (token) => {
    const { data } = await Axios.delete('/users', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (data) {
        localStorage.removeItem('userInfo');
    }
    return data;
}

// change password
const changePasswordService = async (passwords, token) => {
    const { data } = await Axios.put('/users/password', passwords, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

// get all favourites
const getFavoriteMovies= async (token) => {
    const { data } = await Axios.get('/users/favourites', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

// delete all favourites
const deleteFavoriteMovies = async (token) => {
    const { data } = await Axios.delete('/users/favourites', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

// add favourites
const addFavoriteMoviesService = async (MovieId, token) => {
    const { data } = await Axios.post('/users/favourites', MovieId, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}
// ****************************** admin ****************************** //

// admin get all users
const getAllUsersService = async (token) => {
    const { data } = await Axios.get('/users', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

// admin delete all user
const deleteUserService = async (id, token) => {
    const { data } = await Axios.delete(`/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}



export { 
    registerService, 
    logoutService, 
    loginService, 
    updateProfileService, 
    deleteProfileService,
    changePasswordService,
    getFavoriteMovies,
    deleteFavoriteMovies,
    getAllUsersService,
    deleteUserService,
    addFavoriteMoviesService };
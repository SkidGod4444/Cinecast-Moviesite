import Axios from "./Axios";

// ****************************** public ****************************** //
// get all movies
export const getAllMoviesServces = async (
    category,
    time,
    language,
    ratings,
    year,
    search,
    agelimit,
    pageNumber) => {
    const { data } = await Axios.get(`/movies?category=${category}&time=${time}&language=${language}&ratings=${ratings}&year=${year}&search=${search}&agelimit=${agelimit}&pageNumber=${pageNumber}`);
    return data;
};

// get random movies
export const getRandomMoviesServces = async () => {
    const { data } = await Axios.get("/movies/get/random");
    return data;
}

// get movie by id
export const getMovieByIdServces = async (id) => {
    const { data } = await Axios.get(`/movies/${id}`);
    return data;
}

// get toprated movies
export const getTopRatedMoviesServces = async () => {
    const { data } = await Axios.get("/movies/get/toprated");
    return data;
}

// delete movie
export const deleteMovieServices = async (token, id) => {
    const { data } = await Axios.delete(`/movies/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

// delete  all movies
export const deleteAllMoviesServices = async (token) => {
    const { data } = await Axios.delete("/movies", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

// create movie
export const createMovieServices = async (token, movie) => {
    const { data } = await Axios.post("/movies/create", movie, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

// update movie
export const updateMovieServices = async (token, id, movie) => {
    const { data } = await Axios.put(`/movies/${id}`, movie, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}
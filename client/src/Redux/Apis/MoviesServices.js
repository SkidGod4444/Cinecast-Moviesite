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
    const { data } = await Axios.get(`/movies?/category=${category}&time=${time}&language=${language}&ratings=${ratings}&year=${year}&search=${search}&agelimit=${agelimit}&pageNumber=${pageNumber}`);
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
import asyncHandler from 'express-async-handler';
import Movie from '../models/MovieModels.js';
import { MoviesData } from '../Data/MovieData.js';

// ############### PUBLIC CONTROLLERS ##################

// @desc import movies
// @route POST /api/movies/import
// @access Public

const importMovies = asyncHandler(async (req, res) => {
    await Movie.deleteMany({});
    const movies = await Movie.insertMany(MoviesData);
    res.json(movies);
});

// @desc get all movies
// @route GET /api/movies
// @access Public

const getMovies = asyncHandler(async (req, res) => {
    try {
        const { category, time, ratings, language, search, agelimit } = req.query;
        let query = {
            ...(category && { category }),
            ...(time && { time}),
            ...(ratings && { ratings}),
            ...(language && { language}),
            ...(agelimit && { agelimit}),
            ...(search && { name: { $regex: search, $options: 'i' }}),
        };

    // load more movies functionality
        const page = Number(req.query.pageNumber) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

    // find movies with query and skip and limit
    const movies = await Movie.find(query)
    .skip(skip)
    .limit(limit);

    // count the number of movies
    const count = await Movie.countDocuments(query);

    // send response
    res.json({ movies, page, pages: Math.ceil(count / limit), totalMovies: count, });

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc get movie by id
// @route GET /api/movies/:id
// @access Public

const getMovieById = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404);
        throw new Error('Movie not found');
    }
});

// @desc get top rated movies
// @route GET /api/movies/top/rated
// @access Public

const getTopRatedMovies = asyncHandler(async (req, res) => {
    try {
      const movies = await Movie.find({ }).sort({ ratings: -1 });
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

// @desc get random movies
// @route GET /api/movies/random
// @access Public

const getRandomMovies = asyncHandler(async (req, res) => {
    try {
        const movies = await Movie.aggregate([{ $sample: { size: 8 } }]);
        res.json(movies);
    }   catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ############### ADMIN CONTROLLERS ##################

// @desc Update movie
// @route PUT /api/movies/:id
// @access Private/Admin

const updateMovie = asyncHandler(async (req, res) => {
    try {
        const { name, titleimage, director, poster, desc, category, time, ratings, language, year, video } = req.body;
        const movie = await Movie.findById(req.params.id);
        if (movie) {
            movie.name = name || movie.name;
            movie.titleimage = titleimage || movie.titleimage;
            movie.desc = desc || movie.desc;
            movie.director = director || movie.director;
            movie.category = category || movie.category;
            movie.time = time || movie.time;
            movie.ratings = ratings || movie.ratings;
            movie.language = language || movie.language;
            movie.year = year || movie.year;
            movie.video = video || movie.video;
            movie.poster = poster || movie.poster;
            movie.updatedAt = Date.now() || movie.updatedAt;

            const updatedMovie = await movie.save();
            res.json(updatedMovie);
        } else {
            res.status(404);
            throw new Error('Movie not found');
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc Delete movie
// @route DELETE /api/movies/:id
// @access Private/Admin

const deleteMovie = asyncHandler(async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie) {
            await movie.deleteOne();
            res.json({ message: 'Movie removed' });
        } else {
            res.status(404);
            throw new Error('Movie not found');
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc delete all movies
// @route DELETE /api/movies
// @access Private/Admin

const deleteAllMovies = asyncHandler(async (req, res) => {
    try {
        await Movie.deleteMany({});
        res.json({ message: 'All movies removed' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc create movie
// @route POST /api/movies/create
// @access Private/Admin

const createMovie = asyncHandler(async (req, res) => {
    try {
        const { name, titleimg, director, poster, desc, category, time, ratings, language, year, agelimit, video } = req.body;
        const movie = new Movie({
            name,
            titleimg,
            desc,
            director,       
            category,
            time,
            ratings,
            language,
            year, 
            agelimit,
            video,
            poster,
        });
        const createdMovie = await movie.save();
        res.status(201).json(createdMovie);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export {
    importMovies, 
    getMovies, 
    getMovieById, 
    getTopRatedMovies,
    getRandomMovies,
    updateMovie,
    deleteMovie,
    deleteAllMovies,
    createMovie };
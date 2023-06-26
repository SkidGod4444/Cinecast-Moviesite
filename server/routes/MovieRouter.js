import express from "express";
import * as MoviesController from "../controllers/MoviesController.js";
import { protect, admin } from "../middlewares/auth.js";
const router = express.Router();

// ############### PUBLIC ROUTES ##################
router.post("/", MoviesController.importMovies);
router.get("/", MoviesController.getMovies);
router.get("/:id", MoviesController.getMovieById);
router.get("/get/toprated", MoviesController.getTopRatedMovies);
router.get("/get/random", MoviesController.getRandomMovies);

// ############### ADMIN ROUTES ##################
router.put("/:id", protect, admin, MoviesController.updateMovie);
router.delete("/:id", protect, admin, MoviesController.deleteMovie);
router.delete("/", protect, admin, MoviesController.deleteAllMovies);
router.post("/create", protect, admin, MoviesController.createMovie);










export default router;
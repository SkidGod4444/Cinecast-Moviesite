import Express from "express";
import { addFavouriteMovies, changeUserPassword, deleteUser, deleteUserProfile, getFavouriteMovies, getUsers, registerUser, removeAllFavouriteMovies, updateUserProfile } from "../controllers/UserController.js";
import { loginUser } from "../controllers/UserController.js";
import { admin, protect } from "../middlewares/auth.js";


const router = Express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

// ############################# PRIVATE ROUTES #############################
router.put("/", protect, updateUserProfile);
router.delete("/", protect, deleteUserProfile );
router.put("/password", protect, changeUserPassword);
router.get("/favourites", protect, getFavouriteMovies);
router.post("/favourites", protect, addFavouriteMovies);
router.delete("/favourites", protect, removeAllFavouriteMovies);

// ############################# ADMIN ROUTES #############################
router.get("/", protect, admin, getUsers);
router.delete("/:id", protect, admin, deleteUser);

export default router;
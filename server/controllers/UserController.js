import asyncHandler from 'express-async-handler';
import User from '../models/UserModels.js';
import bcrypt from 'bcryptjs';
import {generateToken} from '../middlewares/auth.js';

// @desc Register user
// @route POST /api/users/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, image } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400)
            throw new Error("User already exists");
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        // create user in db
        const user = await User.create({
            username,
            email,
            password: hashedpassword,
            image,
        });

        // send user data
        if (user) {
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                image: user.image,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
        } else {
            res.status(400);
            throw new Error("Invalid user data");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        // check if user exists
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                image: user.image,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
        } else {
            res.status(401);
            throw new Error("Invalid email or password");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ############################## PRIVATE CONTROLLERS ##############################

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const { username, email, image } = req.body;
    try {
        // check if user exists
        const user = await User.findById(req.user._id);
        if (user) {
            user.username = username || user.username;
            user.email = email || user.email;
            user.image = image || user.image;

            // save updated user
            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                username: updatedUser.username,
                email: updatedUser.email,
                image: updatedUser.image,
                isAdmin: updatedUser.isAdmin,
                token: generateToken(updatedUser._id),
            });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @desc Delete user profile
// @route DELETE /api/users
// @access Private
const deleteUserProfile = asyncHandler(async (req, res) => {
    try {
        // check if user exists
        const user = await User.findById(req.user._id);
        if (user) {
            // if user is Admin throw error
            if (user.isAdmin) {
                res.status(400);
                throw new Error("Admin user cannot be deleted");
            }
            await user.deleteOne(); // <-- Replace user.remove() with user.deleteOne()
            res.json({ message: "User removed" });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @desc Change user password
// @desc PUT /api/users/password
// @access Private
const changeUserPassword = asyncHandler(async (req, res) => {
    const { Oldpassword, Newpassword } = req.body;
    try {
        // check if user exists
        const user = await User.findById(req.user._id);
        if (user) {
            // check if old password is correct
            if (await bcrypt.compare(Oldpassword, user.password)) {
                // hash new password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(Newpassword, salt);
                user.password = hashedPassword;
                await user.save();
                res.json({ message: "password changed" });
            } else {
                res.status(401);
                throw new Error("Invalid old password");
            }
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @desc Get all favourite movies
// @route GET /api/users/favourites
// @access Private
const getFavouriteMovies = asyncHandler(async (req, res) => {
    try {
        // check if user exists
        const user = await User.findById(req.user._id).populate("favourite");
        if (user) {
            res.json(user.favourite);
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @desc Add movie to favourites
// @route POST /api/users/favourites
// @access Private
const addFavouriteMovies = asyncHandler(async (req, res) => {
    const { MovieId } = req.body;
    try {
        // check if user exists
        const user = await User.findById(req.user._id);
        if (user) {
            // check if movie is already in favourites
            if (user.favourite.includes(MovieId)) {
                res.status(400);
                throw new Error("Movie already in favourites");
            }
            user.favourite.push(MovieId);
            await user.save();
            res.json(user.favourite);
        } else {
            res.status(404);
            throw new Error("Movie not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @desc Remove all from favourites
// @route DELETE /api/users/favourites
// @access Private
const removeAllFavouriteMovies = asyncHandler(async (req, res) => {
    try {
        // check if user exists
        const user = await User.findById(req.user._id);
        if (user) {
            user.favourite = [];
            await user.save();
            res.json({ message: " All Favourites removed" });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ############################## ADMIN CONTROLLERS ##############################

// @desc Get all users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            if(user.isAdmin){
                res.status(400);
                throw new Error("Cannot delete admin");
            }
            await user.deleteOne();
            res.json({ message: "User removed" });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export {
    registerUser, 
    loginUser, 
    updateUserProfile, 
    deleteUserProfile,
    changeUserPassword,
    getUsers,
    deleteUser,
    getFavouriteMovies,
    addFavouriteMovies,
    removeAllFavouriteMovies

};
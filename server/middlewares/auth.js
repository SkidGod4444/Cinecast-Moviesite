import asyncHandler from 'express-async-handler';
import jwt from "jsonwebtoken";
import User from "../models/UserModels.js";


// generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

// proteciton middleware
const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        // console.log("token found");
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(decoded);
            req.user = await User.findById(decoded.id).select("-Password");
            // console.log(req.user);
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

// admin middleware
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error("Not authorized as an admin");
    }
};

export {generateToken, protect, admin};
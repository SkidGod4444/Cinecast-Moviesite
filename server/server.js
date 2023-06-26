import pkg from "express";
const express = pkg;
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/DataBase.js";
import userRouter from "./routes/UserRouter.js";
import movieRouter from "./routes/MovieRouter.js";
import categoryRouter from "./routes/CategoryRouter.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import UploadRouter from "./controllers/UploadFile.js";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// connect to MongoDB
connectDB();

// Main Routes
app.get("/", (req, res) => {
    res.send("API is running...");
    } );

// Other Routes
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/uploader", UploadRouter)

// Error handling
app.use(errorHandler)

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost/${PORT}`);
    });
import express from "express";
import * as CategoriesController from "../controllers/CategoriesController.js";
import { protect, admin } from "../middlewares/auth.js";
const router = express.Router();

// ############### PUBLIC ROUTES ###############
router.get("/", CategoriesController.getCategories);

// ############### ADMIN ROUTES ###############
router.post("/", protect, admin, CategoriesController.createCategory);
router.delete("/:id", protect, admin, CategoriesController.deleteCategory);
router.put("/:id", protect, admin, CategoriesController.updateCategory);

export default router;
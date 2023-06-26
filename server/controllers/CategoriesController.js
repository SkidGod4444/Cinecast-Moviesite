import asyncHandler from 'express-async-handler';
import Category from '../models/CategoryModels.js';

// ############### PUBLIC CONTROLLERS ###############
// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
    try{
        const categories = await Category.find({});
        res.json(categories);
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }
});

// ############### ADMIN CONTROLLERS ###############
// @desc    Create a category
// @route   POST /api/categories
// @access  Private/Admin
const createCategory = asyncHandler(async (req, res) => {
    try{
        const { title } = req.body;
        const category = new Category({ title });
        const createdCategory = await category.save();
        res.status(201).json(createdCategory);
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }
}
);

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
    try{
        const category = await Category.findById(req.params.id);
        if(category){
            await category.deleteOne();
            res.json({ message: 'Category removed' });
        }
        else{
            res.status(404).json({ message: 'Category not found' });
        }
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }
}
);

// @desc    Update a category
// @route   PUT /api/categories/:id
// @access  Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
    try{
        const { title } = req.body;
        const category = await Category.findById(req.params.id);
        if(category){
            category.title = title;
            const updatedCategory = await category.save();
            res.json(updatedCategory);
        }
        else{
            res.status(404).json({ message: 'Category not found' });
        }
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }
}
);







export { getCategories, createCategory, deleteCategory, updateCategory };
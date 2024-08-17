import foodModel from '../models/foodModel.js';
import fs from 'fs';
import path from 'path';

// Add food item
const addFood = async (req, res) => {
    const image_Filename = `${req.file.filename}`; // Fixed template literal syntax
    // const imagePath = path.join('uploads', image_Filename);

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_Filename,
    });

    try {
        await food.save();
        res.status(200).json({
            success: true,
            message: "Food item added successfully",
        });
    } catch (error) {
        console.error(error);
        // Delete the uploaded file if saving to the database fails
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

// Get all food items
const listFood = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.status(200).json({
            success: true,
            data: food,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({
                success: false,
                message: "Food item not found",
            });
        }

        fs.unlink(`uploads/${food.image}`, async (err) => {
            if (err) {
                console.error("Failed to delete the image:", err);
                return res.status(500).json({
                    success: false,
                    message: "Failed to delete the image",
                });
            }

            await foodModel.findByIdAndDelete(req.body.id);
            res.status(200).json({
                success: true,
                message: "Food item deleted successfully",
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

export { addFood, listFood, removeFood };

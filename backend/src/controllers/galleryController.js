const Gallery = require("../models/Gallery");


// GET جميع الصور
const getAllImages = async (req, res) => {

    try {

        const images = await Gallery.find().sort({
            createdAt: -1
        });

        res.status(200).json(images);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// POST إضافة صورة جديدة
const createImage = async (req, res) => {

    try {

        const {
            title,
            imageUrl,
            category
        } = req.body;

        const image = await Gallery.create({
            title,
            imageUrl,
            category
        });

        res.status(201).json(image);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// DELETE حذف صورة
const deleteImage = async (req, res) => {

    try {

        const { id } = req.params;

        const image = await Gallery.findByIdAndDelete(id);

        if (!image) {

            return res.status(404).json({
                message: "Image not found"
            });

        }

        res.json({
            message: "Image deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


module.exports = {
    getAllImages,
    createImage,
    deleteImage
};
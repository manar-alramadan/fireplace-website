const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getAllImages,
    createImage,
    deleteImage
} = require("../controllers/galleryController");


// الجميع يستطيع مشاهدة الصور
router.get(
    "/",
    getAllImages
);


// الأدمن فقط يستطيع إضافة صورة
router.post(
    "/",
    authMiddleware,
    createImage
);


// الأدمن فقط يستطيع حذف صورة
router.delete(
    "/:id",
    authMiddleware,
    deleteImage
);


module.exports = router;
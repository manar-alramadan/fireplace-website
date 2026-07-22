const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const galleryRoutes = require("./routes/galleryRoutes");

dotenv.config();


const app = express();


connectDB();


app.use(cors());

app.use(express.json());


// Admin API
app.use("/api/admin", adminRoutes);

app.use("/api/gallery", galleryRoutes);

app.get("/", (req,res)=>{
    res.json({
        message:"PlaceFire API Running"
    });
});



const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
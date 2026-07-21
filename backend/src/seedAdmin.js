const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

const Admin = require("./models/Admin");

dotenv.config();


const createAdmin = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB Connected");


        const existingAdmin = await Admin.findOne({
            email: "alryadayadmr@gmail.com"
        });


        if(existingAdmin){

            console.log("Admin already exists");

            process.exit();

        }


        const hashedPassword = await bcrypt.hash(
            "5Zzxxcc12345",
            10
        );


        const admin = new Admin({

            email: "alryadayadmr@gmail.com",

            password: hashedPassword

        });


        await admin.save();


        console.log("Admin created successfully");


        process.exit();


    } catch(error){

        console.log(error.message);

        process.exit(1);

    }

};


createAdmin();
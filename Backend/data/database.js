import mongoose from "mongoose";

// Connecting DB
export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "SignupForm_Backend"
    }).then(() => {
        console.log('Database Connected');
    }).catch((err) => {
        console.log(`Error in connecting Database: ${err}`);
    });
}
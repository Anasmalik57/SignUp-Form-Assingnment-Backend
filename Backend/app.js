import express from 'express';
import { connectDB } from './data/database.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from "./routes/user.js";
import cors from "cors"

dotenv.config({
    path: './data/config.env'
});
app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))
const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/users', userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

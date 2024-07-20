import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken"
// Need or no Need of imorting User from model


// SignUp
export const registerUser =  async (req, res) => {
    try {
        
const { name, username, email, password, bio } = req.body;

const user = await User.findOne({ username, email });
if (user) return res.status(400).json({
    success: false,
    message: "User Already Exists"
});

const hashedPassword = await bcrypt.hash(password, 10);
await User.create({
    name,
    username,
    email,
    password: hashedPassword,
    bio
});

res.status(201).json({
    success: true,
    message: "User Created Successfully",
});

    } catch (err) {
        console.log(err);
    }
};

// Login 
export const loginUser =  async (req, res) => {
    try {
        const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({
        success: false,
        message: "User Not Found"
    });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(404).json({
        success: false,
        message: "Invalid username or password"
    });

    // Sign JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    res.status(200).cookie('token', token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000 // 15 mins
    }).json({
        success: true,
        message: "User logged in successfully",
        user
    });
    } catch (err) {
        console.log(err);
    }
};

// Logout 
export const logoutUser =  (req, res) => {

        
    res.status(200).cookie('token', "", { expires: new Date(Date.now()) }).json({
        success: true,
        message: "User Logged Out Successfully"
    });     
};
// User Profile
export const getMyProfile = async (req, res) => {
    ///////////////////////
    res.status(200).json({
        success: true,
        user: req.user,
    });
};

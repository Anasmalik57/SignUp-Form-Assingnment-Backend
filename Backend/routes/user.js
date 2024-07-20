import express from "express";
import { getMyProfile, loginUser, logoutUser, registerUser } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()


// SignUp Route
router.post('/register', registerUser);

// Login Route
router.get("/login", loginUser);


// Logout Route
router.get('/logout', logoutUser);
router.get('/',isAuthenticated, getMyProfile);






export default router
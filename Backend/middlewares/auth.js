import jwt from "jsonwebtoken";
// Middleware to authenticate token
export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({
        success: false,
        message: "Login First",
    });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });
    }
};
import apperror from "../utils/error.util";
import User from "../models/user.model";

const cookieOptions = {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true
};

const register = async (req, res, next) => {
    try {
        const { name, email, password, confirmpass } = req.body;

        if (!name || !email || !password || !confirmpass) {
            return next(new apperror('All fields are required', 400));
        }
        if (password !== confirmpass) {
            return next(new apperror("Password and confirm password should be the same"));
        }
        const userExist = await User.findOne({ email });
        if (userExist) {
            return next(new apperror('Email already exists', 400));
        }

        const user = await User.create({
            name,
            email,
            password,
            confirmpass,
            avatar: { public_id: email, secure_url: '' }
        });

        const token = await user.generateJWTToken();

        res.cookie('token', token, cookieOptions);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        return next(new apperror('User registration failed'));
    }
};

const login = (req, res) => {
    // Implement login functionality
};

const logout = (req, res) => {
    // Implement logout functionality
};

const getProfile = (req, res) => {
    // Implement getProfile functionality
};

export { register, login, logout, getProfile };

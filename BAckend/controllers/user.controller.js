import apperror from "../utils/error.util.js";
import User from "../models/user.model.js";

const cookieOptions = {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true
};

const register = async (req, res, next) => {
    try {
        const { name, email, password, confirmpass,username } = req.body;

        if (!name || !email || !password || !confirmpass) {
            return next(new apperror('All fields are required', 400));
        }
        if (password !== confirmpass) {
            return next(new apperror("Password and confirm password should be the same"));
        }
        const userExist = await User.findOne({ email }); // Adjust timeout period as needed (in milliseconds)
        if (userExist) {
            return next(new apperror('Email already exists', 400));
        }

        const user = await User.create({
            name,
            email,
            password,
            confirmpass,
            username,
            avatar: { public_id: email, secure_url: '' }
        });

        if (!user) {

            return next(new apperror('Failed to create user', 400));
        }
        await user.save();
        console.log(name,password,email,username);
        user.password=undefined;
        const token = await user.generateJWTToken();

        res.cookie('token', token, cookieOptions);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.error('User registration error:', error);
        return next(new apperror('User registration failed'));
    }
};

const login = async(req, res) => {
    const{email,password}=req.body;
    if(!email || !password){
        return next(new apperror('All fields ae required',400))
    }

    const user=await User.findOne({
        email
    }).select('+password');

    if(!user || !user.comparePassword(password)){
        return next(new apperror('Email or password does not match',400))
    }
};

const logout = (req, res) => {
    // Implement logout functionality
};

const getProfile = (req, res) => {
    // Implement getProfile functionality
};

export { register, login, logout, getProfile };

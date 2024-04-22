import apperror from "../utils/error.util.js";
import User from "../models/user.model.js";
import JWT from "jsonwebtoken";

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
        const userExist = await User.findOne({ email }); 
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
        const token = JWT.sign({ userID: user._id }, process.env.jwt_SECRET, { expiresIn: '3d' })

        res.cookie('token', token, cookieOptions);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.error('User registration error:', error);
        return next(new apperror('User registration failed',500));
    }
};

const login = async(req, res,next) => {
                 
    try{
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
    const token=await user.generateJWTToken();
    user.password=undefined;
    res.cookie('token',token,cookieOptions)
    res.status(200).json({
        success:true,
        message:'user login successfully',
        user,
    })
}
catch(error){
    return next(new apperror(error.message,500))
}

};

const logout = (req, res,next) => {
   res.cookie('tooken',null,{
    secure:true,
    maxAge:0,
    httpOnly:true
   })
   res.status(200).json({
    success: true,
    message: "Logged out"
});
};

const getProfile = async (req, res,next) => {
    try{
     const userId=req.user.id;
     const user=await User.findById(userId)
     res.status(200).json({
        success: true,
        message: "user details",
        user,
    });

}
  catch(e){
      return next(new apperror('Failed to fetch data',500))
  }
}

export { register, login, logout, getProfile };

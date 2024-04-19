import User from "../models/user.model";
import apperror from "../utils/error.util";

const cookieOptions=()=>{
    maxAge:7*24*60*60*1000
    httpOnly: true
    secure:true
}

const register = (async (req, res, next) => {

    try {
        const { name, email, password, confirmpass } = req.body;

        if (!name || !email || !password || !confirmpass) {
            return next(new apperror('All fiels are required', 400));
        }
        if (password !== confirmpass) {
            return next(new apperror("password and confirmpassword should be same"))
            };
        const userexist = await User.findOne({ email });
        if(userexist){
            return next(new apperror('Email already exist', 400));
        }

        const user = User.create({
            name,
            email,
            password,
            confirmpass,
            avator:{
                public_id:email,
                secure_url:''
            }
        })
        if(!user){
            return next(new apperror('User registeration failed'))
        }

        (await user).save();

        user.password=undefined;

const token=await user.generateJWTToken();


res.cookie('token',token,cookieOptions)


        res.status(401).json({
            success: true,
            message:"user regstered successfully",
            user,
        });
    }
    catch (e) {

    }
})

const login = ((req, res) => {

})
const logout = ((req, res) => {

})
const getProfile = ((req, res) => {


})
export {
    register,
    login,
    logout,
    getProfile
}
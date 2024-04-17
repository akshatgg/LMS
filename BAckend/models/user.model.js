import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxLength: [20, 'Name cannot exceed 20 characters'],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        minlength: [6, 'Password should be at least 6 characters long'],
        maxlength: [50, 'Password cannot exceed 50 characters'],
        trim: true,
        select: false
    },
    confirmpass: {
        type: String,
        minlength: [6, 'Password should be at least 6 characters long'],
        maxlength: [50, 'Password cannot exceed 50 characters'],
        trim: true
    },
    avator: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        }
    },
    forgotPasswordToken: {
        type: String
      },
      forgotPasswordExpiryDate: {
        type: Date
      },
      role:{
        type:"String",
        enum:['USER','ADMIN'],
        default:'USER'
      }




})


userSchema.pre('save', async function (next) {
    if ((!this.isModified('password')) || (!this.isModified('confirmpass'))) {
      return next();
    }
    try {
      this.password = await bcrypt.hash(this.password, 10);
      this.confirmpass = await bcrypt.hash(this.confirmpass, 10);
  
      return next();
    } catch (error) {
      return next(error);
    }
  });

  userSchema.methods = {
    generateJWTToken:function() {
      return JWT.sign(
        { id: this._id, email: this.email ,subscription:this.subscription,role:this.role},
        process.env.JWT_ECRET,
        { expiresIn: process.env.JWT_expiry }
      );
    }
  };

const User = model('user', userSchema);
export default User;
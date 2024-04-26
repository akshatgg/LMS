import app from './app.js';
import { config } from 'dotenv';
import database from "./config/db.js";

config();

// Load environment variables
const PORT = process.env.PORT;

// Connect to the database
database();

// Cloudinary configuration
// v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// Razorpay configuration
// export const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET,
// });

app.listen(PORT, () => {
    console.log(`App is running on PORT:${PORT}`);
});

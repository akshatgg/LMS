import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import { config } from 'dotenv';
import cloudinary from 'cloudinary';
import database from "./config/db.js";
config();
app.use(express.json());

const app = express();
const PORT = process.env.PORT;
console.log(PORT)
database()

const corsconfig={
    origin: [process.env.CLIENT_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true
}
app.use(cors(corsconfig));
app.options("",cors(corsconfig));

app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/auth/user', userRoutes);

app.use('/ping', (req, res) => {
    res.send('/pong');
});



app.listen(PORT, () => {
    console.log(`App is running on PORT:${PORT}`);
});



cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});


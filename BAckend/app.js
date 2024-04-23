import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import { config } from 'dotenv';
import database from "./config/db.js";
config();

const app = express();
const PORT = process.env.PORT;
console.log(PORT)
database()


app.use(express.json());
app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true
}));
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/auth/user', userRoutes);

app.use('/ping', (req, res) => {
    res.send('/pong');
});



app.listen(PORT, () => {
    console.log(`App is running on PORT:${PORT}`);
});


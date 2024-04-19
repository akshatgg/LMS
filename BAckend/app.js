import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/auth/user', userRoutes);

app.use('/ping', (req, res) => {
    res.send('/pong');
});

app.all('*', (req, res) => {
    res.status(404).send('OOPS! 404 page not found');
});

app.listen(PORT, () => {
    console.log(`App is running on PORT:${PORT}`);
});

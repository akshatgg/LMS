import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan"; // Import morgan module
import userRoutes from "./routes/user.routes.js"
const app = express();

app.use(express.json());
app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true
}));



app.use('/api/auth/user',userRoutes);




app.use(cookieParser());
app.use(morgan('dev')); // Use morgan middleware

app.use('/ping', function(req, res) {
    res.send('/pong'); //for checking//
});

app.all('*', (req, res) => {
    res.status(404).send('OOPS! 404 page not found');
});

export default app;

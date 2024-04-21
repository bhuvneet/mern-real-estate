import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { error } from 'console';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import { stat } from 'fs';
dotenv.config()


// connect to mongoose database
const mongURI  = process.env.MONGO_DB
mongoose.connect(mongURI).then(() => {
    console.log('Connected to MDB');
}).catch((error) => {
    console.log(error);
})

const app = express();

app.use(express.json());

// listen to a port
app.listen(3000, () =>
{
    console.log('Server is running on port 3000!!');
});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

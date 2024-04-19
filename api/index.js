import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { error } from 'console';
dotenv.config()


// connect to mongoose database
const mongURI  = process.env.MONGO_DB
mongoose.connect(mongURI).then(() => {
    console.log('Connected to MDB');
}).catch((error) => {
    console.log(error);
})

const app = express();

// listen to a port
app.listen(3000, () =>
{
    console.log('Server is running on port 3000!!');
});


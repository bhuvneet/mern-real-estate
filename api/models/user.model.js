import { timeStamp } from "console";
import mongoose from "mongoose";

// create rules/schema

// mongodb will check if username meets the following criteria
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
    }, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    credits: {
        type: Number,
        default: 500
    }
}, { timestamps: true });


const User = new mongoose.model("User", userSchema);
export default User;
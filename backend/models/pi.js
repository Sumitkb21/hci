import mongoose from "mongoose";

const schema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default : Date.now(),
    },
});
 



export const PI = mongoose.model("pi" , schema );

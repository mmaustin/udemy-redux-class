import mongoose from "mongoose";
const {Schema} = mongoose;

//define our model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true},
    password: String
})


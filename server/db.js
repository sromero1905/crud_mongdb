import mongoose, { mongo } from "mongoose";
import { MONGODB_URI } from "./config.js";


export async function connectDB(){
   try {
    const db = await mongoose.connect(MONGODB_URI)
    console.log('connected to',db.connection.name);
   } catch (error) {
    console.error(error);
   }
}
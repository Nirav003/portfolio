import mongoose from 'mongoose'

export default async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.himsu.mongodb.net/");
        console.log('Database connected successfully!');
    } catch (error) {
        console.log(error);
    }
} 
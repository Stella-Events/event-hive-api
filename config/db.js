import mongoose from "mongoose";

// Establishing database connection

const dbConnect = process.env.MONGO_URL

export const dbConnection = () => {
    mongoose.connect (dbConnect).then(() =>{
        console.log('Database is connected')
    })
}
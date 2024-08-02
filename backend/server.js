import express from 'express';
import dotenv from 'dotenv';
import { connectToMongoDB } from './db/connectToMongoDB.js'

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

app.get("/", ( req ,  res ) => {
    res.send("Welcome to the Map Motion API");
})

app.listen(5000 , ( re1 , res ) => {
    console.log("Server is running on port 5000");
    connectToMongoDB()
})
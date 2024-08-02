import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import vehicleRoutes from './routes/vehicle.route.js';
import { connectToMongoDB } from './db/connectToMongoDB.js';

// Load environment variables from the .env file
dotenv.config();

// Initialize the Express application
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 5000;

// Use vehicle routes with the base path
app.use('/api/track', vehicleRoutes);

// Default route for testing if the API is running
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectToMongoDB();
});

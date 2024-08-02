import express from 'express';
import { trackVehicle } from '../controllers/track.controller.js';

const router = express.Router();

// Define route to fetch vehicle data
router.get('/vehicle', trackVehicle);

export default router;

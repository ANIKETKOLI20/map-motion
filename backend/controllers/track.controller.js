// controllers/track.controller.js

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Controller function to handle vehicle tracking requests
export const trackVehicle = (req, res) => {
    // Path to the JSON file containing vehicle data
    const dataFilePath = new URL('../data/dummyData.json', import.meta.url);

    // Read the vehicle data from the file
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            // Handle error if the file read fails
            return res.status(500).send('Server Error');
        }
        // Send the JSON data as response
        res.json(JSON.parse(data));
    });
};

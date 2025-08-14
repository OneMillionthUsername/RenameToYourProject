//Controllers contain the logic for each route, handling requests, processing data, and sending responses. This keeps routes clean and focused on HTTP handling.

/**
- Business Logic Separation: Keeps routes focused on request handling, while the controller manages business logic.
- Database Interaction: Interacts with the models to fetch data or perform actions.
- Error Handling: Ensures that errors in data retrieval are handled gracefully.
 */

import adminModel from '../models/adminModel';

export async function getAllUsers(req, res) {
    try {
        if (err) return res.status(500).send(`Error retrieving users: ${err.message}`);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send('Error retrieving users');
    }
}
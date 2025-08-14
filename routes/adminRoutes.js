//Routes manage HTTP requests (GET, POST, PUT, DELETE) and map them to controller functions.

/**
- Route Management: Organizes routes based on features or entities (e.g., userRoutes).
- Cleaner Code: Separates the routing logic from the controller logic, keeping files smaller and easier to manage.
 */

import { Router } from 'express';
const router = Router();
import { getAllUsers } from '../controllers/userController';

router.get('/users', getAllUsers);

export default router;
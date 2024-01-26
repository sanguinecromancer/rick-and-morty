import { Router } from 'express';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
const router = Router();

import {
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';

router.get('/current-user', getCurrentUser);
router.patch('/update-user', validateUpdateUserInput, updateUser);

export default router;
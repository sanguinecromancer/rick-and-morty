import { Router } from 'express';

const router = Router();

import {
	getCharacters,
	getAllFavoriteCharacters,
	getFavoriteCharacter,
	addToFavorites,
	removeFromFavorites,
} from '../controllers/characterController.js';
import { validateIdParam } from '../middleware/validationMiddleware.js';

router.get('/characters', getCharacters);
router.get('/favorite-characters', getAllFavoriteCharacters);
router.post('/favorite-characters/:id', addToFavorites);
router.get('/favorite-characters/:id', validateIdParam, getFavoriteCharacter);
router.delete('/favorite-characters/:id', removeFromFavorites);

export default router;
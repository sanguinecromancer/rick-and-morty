import { Router } from 'express';

import { authenticateUser } from '../middleware/authMiddleware.js';
const router = Router();

import {
   getAllFavoriteCharacters,
   getFavoriteCharacter,
   addToFavorites,
   removeFromFavorites,
} from '../controllers/characterController.js';
import { validateIdParam } from '../middleware/validationMiddleware.js';
import { loadCharacters, getCharacters } from '../models/CharactersModel.js';


router.get('/characters', loadCharacters);
router.get('/favorite-characters', getAllFavoriteCharacters);
router.post('/favorite-characters/:id', addToFavorites);
router.get('/favorite-characters/:id', validateIdParam, getFavoriteCharacter);
 router.delete('/favorite-characters/:id', removeFromFavorites);

 export default router;
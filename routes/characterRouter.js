import { Router } from 'express';
const router = Router();

import {
   getAllFavoriteCharacters,
   getFavoriteCharacter,
   addToFavorites,
//   updateCharacter,
   removeFromFavorites,
} from '../controllers/characterController.js';
import { validateIdParam } from '../middleware/validationMiddleware.js';
import { loadCharacters, getCharacters } from '../models/CharactersModel.js';


router.get('/characters', loadCharacters);
router.get('/favorite-characters', getAllFavoriteCharacters);
router.post('/favorite-characters/:id', addToFavorites);
router.get('/favorite-characters/:id', validateIdParam, getFavoriteCharacter);
// // router.patch('/:id', updateCharacter);
 router.delete('/favorite-characters/:id', removeFromFavorites);

// router.route('/').get(getAllCharacters).post(createCharacter);
// router.route('/:id').get(getCharacter).patch(updateCharacter).delete(deleteCharacter);

 export default router;
import FavoriteCharacter from '../models/FavoriteCharacterModel.js';
import { getAllCharacters, getCharacter } from '../models/CharactersModel.js';

export function getCharacters(req, res) {

	const allCharacters = getAllCharacters();
	//pagination 

  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  
  // Calculate the start and end indexes for the requested page
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  // Slice the products array based on the indexes
  const paginatedCharacters = allCharacters.slice(startIndex, endIndex);
  const count = allCharacters.length;
  
  // Calculate the total number of pages
  const totalPages = Math.ceil(allCharacters.length / pageSize);
  
  // Send the paginated characters and total pages as the API response
  res.status(200).json({ count, totalPages, currentPage: page, characters: paginatedCharacters});
}

export const getAllFavoriteCharacters = async (req, res) => {
	let favoriteCharacters = await FavoriteCharacter.find({ createdBy: req.user.userId });
	favoriteCharacters = favoriteCharacters.map(({ id }) => getCharacter(id));
	res.status(200).json({ favoriteCharacters });
};

export const getFavoriteCharacter = async (req, res) => {
	const { id } = req.params;
	let favoriteCharacter = await FavoriteCharacter.find({ createdBy: req.user.userId, id: Number(id) });
	if (!favoriteCharacter) {
		return res.status(404).json({ msg: `no favorite character with id ${id}` });
	} else {
		favoriteCharacter = getCharacter(id);
	}
	res.status(200).json({ favoriteCharacter });
};

export const addToFavorites = async (req, res) => {
	req.body.createdBy = req.user.userId;
	const { id } = req.params;
	req.body.id = id;
	const favoriteCharacter = await FavoriteCharacter.create(req.body);
	res.status(201).json({ msg: 'Character added to favorites!', favoriteCharacter});
};

export const removeFromFavorites = async (req, res) => {
	const { id } = req.params;
	const { deletedCount } = await FavoriteCharacter.deleteMany({ createdBy: req.user.userId, id: Number(id) });
	if (!deletedCount) {
		return res.status(404).json({ msg: `no favorite character with id ${id}` });
	}
	res.status(200).json({ msg: 'character removed from favorites' });
};

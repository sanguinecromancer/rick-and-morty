import FavoriteCharacter from '../models/FavoriteCharacterModel.js';
import { getAllCharacters, getCharacter } from '../models/CharactersModel.js';

export function getCharacters(req, res) {
	let offset = 0;
	let limit = 0;
	const allCharacters = getAllCharacters();
	const characters = limit ? allCharacters.slice(offset, offset + limit) : allCharacters; 
	res.status(200).json({ characters });
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

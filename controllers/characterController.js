import FavoriteCharacter from '../models/FavoriteCharacterModel.js';

export const getAllFavoriteCharacters = async (req, res) => {
	const favoriteCharacters = await FavoriteCharacter.find({ createdBy: req.user.userId });
	res.status(200).json({ favoriteCharacters });
};

export const getFavoriteCharacter = async (req, res) => {

	const { id } = req.params;
	console.log(id);
	const favoriteCharacter = await FavoriteCharacter.findById(id);
	if (!favoriteCharacter) {
		return res.status(404).json({ msg: `no favorite character with id ${id}` });
	}
	res.status(200).json({ favoriteCharacter });
};

export const addToFavorites = async (req, res) => {
	req.body.createdBy = req.user.userId;
	const { id } = req.params;
	req.body.id = id;
	const favoriteCharacter = await FavoriteCharacter.create(req.body);
	res.status(201).json(favoriteCharacter);
};

export const removeFromFavorites = async (req, res) => {
	const { id } = req.params;
	const removedCharacter = await FavoriteCharacter.findByIdAndDelete(id);
	if (!removedCharacter) {
		return res.status(404).json({ msg: `no favorite character with id ${id}` });
	}
	res.status(200).json({ msg: 'character removed from favorites', removed: removedCharacter });
};

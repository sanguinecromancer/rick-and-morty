import FavoriteCharacter from '../models/FavoriteCharacterModel.js';






// function someId() {
// 	return Math.floor(Math.random() * 100);
// }

//let characters = await loadCharacters();

// let favoriteCharacters = [{ id: 100}];

export const getAllFavoriteCharacters = async (req, res) => {
	try {
		const favoriteCharacters = await FavoriteCharacter.find({});
		res.status(200).json({ favoriteCharacters });
	} catch(error) {
		res.status(500).json({ msg: 'server error'});
	}
};

export const getFavoriteCharacter = async (req, res) => {
	try {
		const { id } = req.params;
		console.log(id);
		const favoriteCharacter = await FavoriteCharacter.findById(id);
		if (!favoriteCharacter) {
			return res.status(404).json({ msg: `no favorite character with id ${id}` });
		}
		res.status(200).json({ favoriteCharacter });
	} catch (error) {
		res.status(500).json({ msg: 'server error'});
	}

};

export const addToFavorites = async (req, res) => {
	try {
		const { id } = req.params;
		const favoriteCharacter = await FavoriteCharacter.create({ id: id });
		res.status(201).json({ favoriteCharacter });
	} catch(error) {
		res.status(500).json({ msg: 'server error'});
	}
};

export const removeFromFavorites = async (req, res) => {

	try { 
		const { id } = req.params;
		const removedCharacter = await FavoriteCharacter.findByIdAndDelete(id);
		if (!removedCharacter) {
			return res.status(404).json({ msg: `no favorite character with id ${id}` });
		}
		res.status(200).json({ msg: 'character removed from favorites', removed: removedCharacter });
	} catch (error) {
		res.status(500).json({ msg: 'server error'});
	}
};



// export const updateCharacter = async (req, res) => {
// 	if (req) {
// 		console.log(req);
// 	const { company, position } = req.body;
// 	}
// 	//const { company, position } = req.body;
// 	if (!company || !position) {
// 		return res.status(400).json({ msg: 'please provide company and position' });
// 	}
// 	const { id } = req.params;
// 	const character = characters.find((character) => character.id == id);
// 	if (!character) {
// 		return res.status(404).json({ msg: `no character with id ${id}` });
// 	}

// 	character.company = company;
// 	character.position = position;
// 	res.status(200).json({ msg: 'character modified', character });
// };



  
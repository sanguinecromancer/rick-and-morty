
let allCharacters = [];

export async function loadAllCharacters() {
  try {
		allCharacters = [];
		let url = 'http://rickandmortyapi.com/api/character';
		while (url) {
			let res = await fetch(url);
			let { info, results } = await res.json();
			allCharacters = [...allCharacters, ...results];
			url = info.next;
		}
		console.log('loaded ' + allCharacters.length + ' characters');
		return allCharacters;
	} catch (error) {
		console.errror(error);
	}
}

export function getAllCharacters() {
	return allCharacters;
}

export function getCharacter(id) {
	return allCharacters.find(char => char.id == id);
}

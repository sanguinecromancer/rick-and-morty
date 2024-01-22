
let characters = [];

export async function loadCharacters(req, res) {

  try {
		characters = [];
		let url = 'http://rickandmortyapi.com/api/character';
		while (url) {
				let res = await fetch(url);
				let { info, results } = await res.json();
				characters = [...characters, ...results];
				url = info.next;
		}
		console.log(characters);
		res.status(200).json({ characters });
		return characters;
	} catch (error) {
		res.status(500).json({ msg: 'server error'});
	}
}

export function getCharacters(offset,  limit) {
    return characters.slice(offset, offset + limit)
}

function getCharacter(id) {
    return characters.find(char => char.id == id);
}
  
export default loadCharacters;
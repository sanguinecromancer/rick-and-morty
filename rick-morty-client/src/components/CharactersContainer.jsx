import CharacterItem from './CharacterItem';
import Wrapper from '../assets/wrappers/CharactersContainer';

import { useFavoriteCharactersContext } from '../pages/FavoriteCharacters';

const CharactersContainer = () => {
  const { data } = useFavoriteCharactersContext();
  const { favoriteCharacters } = data;
  if (favoriteCharacters.length === 0) {
    return (
      <Wrapper>
        <h2>No characters to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className='characters'>
        {favoriteCharacters.map((character) => {
          return <CharacterItem key={character._id} {...character} />;
        })}
      </div>
    </Wrapper>
  );
};

export default CharactersContainer;
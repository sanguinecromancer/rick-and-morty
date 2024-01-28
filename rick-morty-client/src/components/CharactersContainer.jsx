import Wrapper from '../assets/wrappers/CharactersContainer';
import { useSelector } from 'react-redux';
import CharacterItem from './CharacterItem';

const CharactersContainer = () => {

  const { favoriteCharacterItems } = useSelector((store) => store.favoriteCharacterItems);
 
  if (favoriteCharacterItems?.length === 0) {
    return (
      <Wrapper>
        <h2>No characters to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className='characters'>
        {favoriteCharacterItems?.map((character, index) => {
          return <CharacterItem key={index} {...character} />;
        })}
      </div>
    </Wrapper>
  );
};

export default CharactersContainer;
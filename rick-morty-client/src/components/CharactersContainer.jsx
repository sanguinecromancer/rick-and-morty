import CharacterItem from './CharacterItem';
import Wrapper from '../assets/wrappers/CharactersContainer';
import { useSelector, useDispatch } from 'react-redux';



const CharactersContainer = () => {

  const { characterItems, total } = useSelector((store) => store.characters);
  const dispatch = useDispatch();
  if (characterItems.length === 0) {
    return (
      <Wrapper>
        <h2>No characters to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <p>Total: {total} </p>
      <div className='characters'>
        {characterItems.map((character) => {
          return <CharacterItem key={character._id} {...character} />;
        })}
      </div>
    </Wrapper>
  );
};

export default CharactersContainer;
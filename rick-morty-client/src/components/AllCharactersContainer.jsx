import CharacterItem from './CharacterItem';
import Wrapper from '../assets/wrappers/CharactersContainer';
import { useSelector} from 'react-redux';

const AllCharactersContainer = () => {
  const { allCharacterItems } = useSelector((store) => store.allCharacterItems);

  if (allCharacterItems?.length === 0) {
    return (
      <Wrapper>
        <h2>No characters to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className='characters'>
        {allCharacterItems?.map((character, index) => {
          return <CharacterItem key={index} {...character}/>;
        })}
      </div>
    </Wrapper>
  );
};

export default AllCharactersContainer;
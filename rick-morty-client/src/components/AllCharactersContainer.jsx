import CharacterItem from './CharacterItem';
import Wrapper from '../assets/wrappers/CharactersContainer';
import { useSelector, useDispatch } from 'react-redux';



const AllCharactersContainer = () => {
     const { allCharacterItems, total } = useSelector((store) => store.allCharacterItems);
    // const { favoriteCharacterItems, isLoading } = useSelector((store) => store.favoriteCharacterItems);
    
    // let allIds = allCharacterItems.map((item) => item.id);
    // const favoriteIds = favoriteCharacterItems.map((item) => item.id);

  const dispatch = useDispatch();
  if (allCharacterItems?.length === 0) {
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
        {allCharacterItems?.map((character, index) => {
          return <CharacterItem key={index} {...character}/>;
        })}
      </div>
    </Wrapper>
  );
};

export default AllCharactersContainer;
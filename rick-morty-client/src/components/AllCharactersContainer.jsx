import FavoriteCharacterItem from './FavoriteCharacterItem';
import Wrapper from '../assets/wrappers/CharactersContainer';
import { useSelector, useDispatch } from 'react-redux';



const AllCharactersContainer = () => {
    debugger;
  const { allCharacterItems, total } = useSelector((store) => store.allCharacterItems);
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
        {allCharacterItems?.map((character) => {
        debugger;
          return <FavoriteCharacterItem key={character._id} {...character} />;
        })}
      </div>
    </Wrapper>
  );
};

export default AllCharactersContainer;
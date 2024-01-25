import FavoriteCharacterItem from './FavoriteCharacterItem';
import Wrapper from '../assets/wrappers/CharactersContainer';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotalFavorites, getFavoriteCharacterItems } from "../features/characters/favoriteCharacterSlice";
import { useEffect } from 'react';


const CharactersContainer = () => {

  const { favoriteCharacterItems, total } = useSelector((store) => store.favoriteCharacterItems);
  const dispatch = useDispatch();
 
  if (favoriteCharacterItems?.length === 0) {
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
        {favoriteCharacterItems?.map((character, index) => {
          return <FavoriteCharacterItem key={index} {...character} />;
        })}
      </div>
    </Wrapper>
  );
};

export default CharactersContainer;
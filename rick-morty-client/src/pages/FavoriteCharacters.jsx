import { toast } from 'react-toastify';
import { useEffect } from 'react';
import  CharactersContainer from '../components/CharactersContainer';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { calculateTotalFavorites, getFavoriteCharacterItems } from "../features/characters/favoriteCharacterSlice";
import { useSelector, useDispatch } from 'react-redux';


const FavoriteCharacters = () => {
  return (
  <div>
      <>
        <h4>Favorite Characters</h4>
        <CharactersContainer/>
      </>
    </div>
  );
};

export default FavoriteCharacters;
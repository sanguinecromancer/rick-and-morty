import { toast } from 'react-toastify';
import { useEffect } from 'react';
import  CharactersContainer from '../components/CharactersContainer';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { calculateTotalFavorites, getFavoriteCharacterItems } from "../features/characters/favoriteCharacterSlice";
import { useSelector, useDispatch } from 'react-redux';

// export const loader = async ({ request }) => {
//   try {
//     const { data } = await customFetch.get('/favorite-characters');
//     console.log(data);
//     return {
//       data,
//     };
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return error;
//   }
// };


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

//export const useFavoriteCharactersContext = () => useContext(FavoriteCharactersContext);
export default FavoriteCharacters;
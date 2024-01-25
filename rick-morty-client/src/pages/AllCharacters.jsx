import { toast } from 'react-toastify';
import  AllCharactersContainer from '../components/AllCharactersContainer';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
//import { calculateTotalFavorites, getFavoriteCharacterItems } from "../features/characters/AllCharactersSlice";
import { useSelector, useDispatch } from 'react-redux';


const AllCharacters = () => {
  const { allCharacterItems, isLoading } = useSelector((store) => store.allCharacterItems);
 // const { data } = useLoaderData();
  return (
  <div>
      <>
        <h4>All Characters</h4>
        <AllCharactersContainer/>
      </>
    </div>
  );
};
//export const useAllCharactersContext = () => useContext(AllCharactersContext);
export default AllCharacters;
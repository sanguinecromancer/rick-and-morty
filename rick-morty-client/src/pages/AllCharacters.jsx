import { toast } from 'react-toastify';
import  AllCharactersContainer from '../components/AllCharactersContainer';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
//import { calculateTotalFavorites, getFavoriteCharacterItems } from "../features/characters/AllCharactersSlice";
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


const AllCharacters = () => {
  const { favoriteCharacterItems, isLoading } = useSelector((store) => store.favoriteCharacterItems);
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
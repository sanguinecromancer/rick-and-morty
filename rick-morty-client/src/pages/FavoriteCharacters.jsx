import { toast } from 'react-toastify';
import  CharactersContainer from '../components/CharactersContainer';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get('/favorite-characters');
    console.log(data);
    return {
      data,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};


const FavoriteCharacters = () => {
 // const { data } = useLoaderData();
  return (
  <div>
      <>
        <h4>Favorite Characters</h4>
        <CharactersContainer />
      </>
    </div>
  );
};

//export const useFavoriteCharactersContext = () => useContext(FavoriteCharactersContext);
export default FavoriteCharacters;
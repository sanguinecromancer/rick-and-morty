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

const FavoriteCharactersContext = createContext();

const FavoriteCharacters = () => {
  const { data } = useLoaderData();

  return (
    <FavoriteCharactersContext.Provider value={{ data }}>
    <>
    <h1>Favorite Characters</h1>
     
      <CharactersContainer />
    </>
    </FavoriteCharactersContext.Provider>
  );
};

export const useFavoriteCharactersContext = () => useContext(FavoriteCharactersContext);
export default FavoriteCharacters;
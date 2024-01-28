import CharacterItem from './CharacterItem';
import Wrapper from '../assets/wrappers/CharactersContainer';
import { getAllCharacterItems } from "../features/characters/allCharactersSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const AllCharactersContainer = () => {
  const { allCharacterItems, totalPages } = useSelector((store) => store.allCharacterItems);

  useLocation();

  let navigate = useNavigate();
  let page = parseInt(new URL(window.location.href).searchParams.get('page') || '1');

  let dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getAllCharacterItems(page));
    } catch (error) {
      console.error(error);
    }
  }, [page]);

  let canLoadPrev = page > 1;
  let canLoadNext = page < totalPages;

  if (allCharacterItems?.length === 0) {
    return (
      <Wrapper>
        <h2>No characters to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="pagination-bar">
        <button onClick={() => navigate(`?page=${page - 1}`)} className='btn' disabled={!canLoadPrev}>
          Previous Page
        </button>
        <div>
          Page {page} of {totalPages}
        </div>
        <button onClick={() => navigate(`?page=${page + 1}`)} className='btn' disabled={!canLoadNext}>
          Next Page
        </button>
      </div>
      <div className='characters'>
        {allCharacterItems?.map((character, index) => {
          return <CharacterItem key={index} {...character}/>;
        })}
      </div>
    </Wrapper>
  );
};

export default AllCharactersContainer;
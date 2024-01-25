
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CharacterItem';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavoritesRequest, removeFromFavorites } from '../features/characters/favoriteCharacterSlice';
//import { favoriteIds } from '../features/characters/favoriteCharacterSlice';
import { useNavigate } from 'react-router-dom';

const CharacterItem = ({id, name}) => {
  const { favoriteIds } = useSelector((store) => store.favoriteCharacterItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{name.charAt(0)}</div>
        <div className='info'>
          <h5>{id}</h5>
          <p>{name}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <div className={`status ${name}`}>{name}</div>
        </div>
        <footer className='actions'>
          {!favoriteIds.includes(id) ? (
            <button className='btn favorite-btn' 
              onClick={async () => {
                await dispatch(addToFavoritesRequest(id));
                //navigate('/dashboard/all-characters');
              }}
            >
              Favorite
            </button>
            ) : (
              <button className='btn favorite-btn' 
              onClick={async () => {
                 await dispatch(removeFromFavorites(id));
               // navigate('/dashboard/all-characters');
              }}
            >Unfavorite</button>
              
            )
          }
        </footer>
      </div>
    </Wrapper>
  );
};

export default CharacterItem;
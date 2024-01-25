
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CharacterItem';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../features/characters/favoriteCharacterSlice';

const FavoriteCharacterItem = ({id, name}) => {
  const dispatch = useDispatch();
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
        <footer className='actions'>
          <Form>
            <button type='submit' className='btn delete-btn' 
               onClick={() => {dispatch(removeFromFavorites(id))}}
              >
                Remove
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default FavoriteCharacterItem;
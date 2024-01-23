
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CharacterItem';

const CharacterItem = ({
  _id,
    createdBy
}) => {

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{_id.charAt(0)}</div>
        <div className='info'>
          <h5>{_id}</h5>
          <p>{createdBy}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <div className={`status ${createdBy}`}>{createdBy}</div>
        </div>
        <footer className='actions'>
          <Form>
            <button type='submit' className='btn delete-btn'>
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default CharacterItem;

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Link } from 'react-router-dom';
import { FormRow } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="dwight" />
        <FormRow type="email" name="email" defaultValue="dwight@office.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;

import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import styled from 'styled-components';


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        {/* <img src={logo} alt='rick-morty' className='logo' /> */}
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Rick and Morty app
          </h1>
          <p>
            Welcome to Rick-Morty character app where you can register
            for free and select your favorite characters! All for free!
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='rick-morty' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
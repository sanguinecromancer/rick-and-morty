import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from 'react-icons/fa';
import { useDashboardContext } from '../pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';
//import { useSelector, useDispatch } from 'react-redux';
//import { openSmallSideBar, closeSmallSideBar } from '../features/dashboard/dashboardSlice';

const Navbar = () => {
  // const dispatch = useDispatch();
  // const x = useSelector((store) => store);
  // console.log(x);

   const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' 
        className='toggle-btn'  
        // onClick={() => dispatch(openSmallSideBar())}
        onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
          {/* <h3>Rick and morty</h3> */}
          <h4 className='logo-text'>dashboard</h4>
        </div>
        <div className='btn-container'>
           <ThemeToggle /> 
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
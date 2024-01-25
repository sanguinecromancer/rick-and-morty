import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useDashboardContext } from '../pages/DashboardLayout';
//import { useSelector, useDispatch } from 'react-redux';
//import { openSmallSideBar, closeSmallSideBar } from '../features/dashboard/dashboardSlice';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
 // const dispatch = useDispatch();
  // const smallSideBarIsOpen = useSelector((store) => store.dashboard.smallSideBarIsOpen);
  // console.log(smallSideBarIsOpen);
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
        // className="sidebar-container show-sidebar"
      >
        <div className='content'>
          <button 
          type='button' 
          className='close-btn' 
          onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>
            {links.map((link) => {
              const { text, path, icon } = link;

              return (
                <NavLink
                  to={path}
                  key={text}
                  className='nav-link'
                  onClick={toggleSidebar}
               
                  end
                >
                  <span className='icon'>{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
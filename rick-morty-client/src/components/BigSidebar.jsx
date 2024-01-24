import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/BigSidebar';
//import { useDashboardContext } from '../pages/DashboardLayout';

const BigSidebar = () => {
 // const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        // className={
        //   showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        // }
        className="sidebar-container"
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks/>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
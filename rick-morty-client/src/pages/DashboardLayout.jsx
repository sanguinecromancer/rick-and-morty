import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components';
import { checkDefaultTheme } from '../App';
import { useState, createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import FavoriteCharacters from '../pages/FavoriteCharacters';
import CharactersContainer from '../components/CharactersContainer';
//import { openSmallSideBar, closeSmallSideBar } from '../features/dashboard/dashboardSlice';

const DashboardContext = createContext();

// export const loader = async () => {
//   try {
//     const { data } = await customFetch('/users/current-user');
//     return data;
//   } catch (error) {
//     return redirect('/');
//   }
// };


const DashboardLayout = () => {
 const { smallSideBarIsOpen } = useSelector((store) => store.dashboard);
  // useEffect(() => {
  //   dispatch(calculateTotalFavorites());
  // }, [characterItems]);
  // const { user } = useLoaderData();
  // console.log(user);
   const navigate = useNavigate();
  // const [showSidebar, setShowSidebar] = useState(false);
  // const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

  // const toggleDarkTheme = () => {
  //   const newDarkTheme = !isDarkTheme;
  //   setIsDarkTheme(newDarkTheme);
  //   document.body.classList.toggle('dark-theme', newDarkTheme);
  //   localStorage.setItem('darkTheme', newDarkTheme);
  // }; 
  // const toggleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };

  // const logoutUser = async () => {
  //   navigate('/');
  //   await customFetch.get('/auth/logout');
  //   toast.success('Logging out...');
  // };
  
  return (
    // <DashboardContext.Provider
    //   value={{
    //     user,
    //     showSidebar,
    //     isDarkTheme,
    //     toggleDarkTheme,
    //     toggleSidebar,
    //     logoutUser,
    //   }}
    // >
    <div>
      <Wrapper>
        <main className='dashboard'>
         <SmallSidebar />
           <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              {/* <Outlet context={{ user }}/> */}
              <CharactersContainer />
            </div>
          </div>
        </main>
      </Wrapper>
    </div>
  );
};

//export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
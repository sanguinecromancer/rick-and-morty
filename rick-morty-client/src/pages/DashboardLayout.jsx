import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components';
import { checkDefaultTheme } from '../App';
import { useState, createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotalFavorites, getFavoriteCharacterItems } from "../features/characters/favoriteCharacterSlice";
import { getAllCharacterItems } from "../features/characters/allCharactersSlice";

const DashboardContext = createContext();

export const loader = async () => {
  try {
    const { data } = await customFetch('/users/current-user');
    return data;
  } catch (error) {
    console.error(error);
    return redirect('/');
  }
};


const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

   const { favoriteCharacterItems, isLoading } = useSelector((store) => store.favoriteCharacterItems);
  const { loading } = useSelector((store) => store.allCharacterItems);

   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalFavorites());
  }, [favoriteCharacterItems]);

  useEffect(() => {
    dispatch(getFavoriteCharacterItems());
  }, []);

  useEffect(() => {
    dispatch(getAllCharacterItems());
  }, []);

  if (loading || isLoading) {
    return <div className='loading'>
      <h2>Loading...</h2>
    </div>
  }

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  }; 
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    toast.success('Logging out...');
  };
  
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
 
      <Wrapper>
        <main className='dashboard'>
         <SmallSidebar user ShowSidebar />
           <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet context={{ user }}/>
            </div>
          </div>
        </main>
      </Wrapper>
      </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from 'react';
import { HomeLayout, Landing, Register, Login, DashboardLayout,
 Error, FavoriteCharacters, AllCharacters, Profile,
 Stats, Admin
} from './pages';
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as dashboardLoader } from './pages/DashboardLayout';
//import { loader as favoriteCharactersLoader } from './pages/FavoriteCharacters';
import { Navbar } from "./components";
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotalFavorites } from "./features/characters/characterSlice";


export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: '/register',
        element: <Register />,
        action: registerAction
      },
      {
        path: '/login',
        element: <Login />,
        action: loginAction
      },
      {
        path: '/dashboard',
        element: <DashboardLayout/>,
        loader: dashboardLoader,
        children: [
          {
            path: 'all-characters',
            element: <AllCharacters />
          },
          {
            path: 'favorite-characters',
            element: <FavoriteCharacters />,
         //  loader: favoriteCharactersLoader
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'admin',
            element: <Admin />
          },
        ]
      },
    ],
  },
  
])

const App = () => {

  const { characterItems } = useSelector((store) => store.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalFavorites());
  }, [characterItems]);

  return <RouterProvider router={router} />;
  
}
export default App
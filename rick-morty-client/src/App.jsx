import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Register, Login, DashboardLayout,
 Error, FavoriteCharacters, AllCharacters, Profile, Admin} from './pages';
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as dashboardLoader } from './pages/DashboardLayout';

export const checkDefaultTheme = () => {
  const defaultDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkTheme = (localStorage.getItem('darkTheme') || String(defaultDarkMode)) === 'true';
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
  return <RouterProvider router={router} />;
}
export default App
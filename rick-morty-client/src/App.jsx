import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Register, Login, DashboardLayout,
 Error, AllCharacters, AddCharacter, EditCharacter, DeleteCharacter, Profile,
 Stats, Admin
} from './pages';
import { action as registerAction } from './pages/Register';

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
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddCharacter />
          },
          {
            path: 'stats',
            element: <Stats />
          },
          {
            path: 'all-characters',
            element: <AllCharacters />
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
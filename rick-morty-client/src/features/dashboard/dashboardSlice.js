import { createSlice } from '@reduxjs/toolkit';


import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import customFetch from '../../utils/customFetch';
//import { loader } from '../../pages/DashboardLayout';



const initialState = {
  smallSideBarIsOpen: true,
  // toggleSideBar: toggleSideBar,
  // logoutUser: logoutUser

};

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
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {

     openSmallSideBar: (state, action) => {

      state.smallSideBarIsOpen = true;
     
    },
    closeSmallSideBar: (state, action) => {
      state.smallSideBarIsOpen = false;
     
    },

  }
});


console.log(dashboardSlice);

//export const { openSmallSideBar, closeSmallSideBar } = dashboardSlice.actions;
export default dashboardSlice.reducer;
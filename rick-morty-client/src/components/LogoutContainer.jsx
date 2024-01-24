import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useState } from 'react';
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

//import { useDashboardContext } from '../pages/DashboardLayout';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);

  const navigate = useNavigate();
  // const loader = async () => {
  //   try {
  //     const { data } = await customFetch('/users/current-user');
  //     return data;
  //   } catch (error) {
  //     return redirect('/');
  //   }
  // };
    const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    toast.success('Logging out...');
  };

 // const { user } = useLoaderData();
  const user = "john";
  console.log(user);

  return (
    <Wrapper>
      <button
        type='button'
        className='btn logout-btn'
        onClick={() => setShowLogout(!showLogout)}
      >
        {user?.avatar ? (
          <img src={user.avatar} alt='avatar' className='img' />
        ) : (
          <FaUserCircle />
        )}

        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type='button' 
        className='dropdown-btn' 
        onClick={logoutUser}
        >
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
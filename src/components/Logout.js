import React, { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    const Logout = () => {
      localStorage.removeItem('holidayhousingkey');
      window.location.assign('/login');
    };
    Logout();
  });

  return <></>;
};

export default Logout;

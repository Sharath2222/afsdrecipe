import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRouteSB = ({ element, ...rest }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return isLoggedIn ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRouteSB;

import React, { createContext, useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import GoTrue from 'gotrue-js';

const auth = new GoTrue({
    APIUrl: 'https://peppy-pixie-2d0b01/.netlify/identity',
    audience: '',
    setCookie: false,
  });

const defaultState = {
  authentificated: false,
  user: null,
};

export const AuthContext = createContext(defaultState);

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  const login = (email, password, onError) => {
    auth
        .login(email, password, false)
        .then((response) => {
            setState({ ...state, user: {email}, authentificated: true });
            navigate('/account');
        })
        .catch((error) => onError(JSON.stringify(error)));
    setState({ ...state, user: user, authentificated: true });
  };

  const logout = () => {
    if (state.authentificated) return;
    const user = auth.currentUser();
    user.logout().then(response => {
        setState({ ...state, user: null, authentificated: false });
        navigate('/account');
    })
    .catch(error => {
      console.log("Failed to logout user: %o", error);
      throw error;
    });
  };

  const signup = (email, password) => {
    auth
        .signup(email, password)
        .then((response) => {
            console.log('Confirmation email sent', response);
            navigate('/accountSuccess');
    })
        .catch((error) => console.log("It's an error", error));
  }

  useEffect(() => {
    if (state?.open === true) {
      setTimeout(() => {
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        state,
        setState,
        login,
        logout,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default NotificationContext;

import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  userName: "",
  photoUrl: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, name, photoUrl = "") => {
    setToken(token);
    setUserName(name);
    setPhotoUrl(photoUrl);
  };

  const logoutHandler = () => {
    setToken(null);
    setUserName(null);
  };

  const contextValue = {
    userName,
    token,
    photoUrl,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

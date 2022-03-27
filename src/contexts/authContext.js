import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  if (localStorage.getItem("auth") === "undefined") {
    localStorage.clear();
  }
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedAuth);

  function login(authData) {
    setAuth(authData);
    console.log(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  function logout() {
    setAuth("");
    localStorage.removeItem("auth");
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

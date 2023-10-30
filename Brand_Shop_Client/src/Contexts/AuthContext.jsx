import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../Firebase/Firebase.Config";

export const AuthContext = createContext();

const AuthProvitder = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const AuthInfo = { user, setUser };

  useEffect(()=>{
    onAuthStateChanged(Auth, (user) => {
        if (user) {
          setUser(user)
          setLoading(!loading)
          // ...
        } else {
          setLoading(!loading)
        }
      });
  }, [])

  return (
    <>
      {
        loading ? "" : <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
      }
    </>
  );
};

export default AuthProvitder;

import { React, createContext, useState } from "react";
import roles from "../helpers/roles";

export const AuthContext = createContext();

function AuthProvider({children}) {
  //const [user, setUser] = useState(null);
  const [user, setUser] = useState({id:1, rol:roles.admin});

  const contextValue = {
    user,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

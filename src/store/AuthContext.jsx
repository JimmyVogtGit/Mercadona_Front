import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLog, setIsLog] = useState();
  const deleteStorage = () => {
    localStorage.removeItem("isConnect");
    setIsLog(false);
  };
  useEffect(() => {
    const isConnect = localStorage.getItem("isConnect");
    isConnect !== null ? setIsLog(true) : setIsLog(false);
  }, [isLog]);

  return (
    <AuthContext.Provider value={{ isLog, setIsLog, deleteStorage }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.obj,
};

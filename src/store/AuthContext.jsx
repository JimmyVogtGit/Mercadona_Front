import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLog, setIsLog] = useState();
  const [username, setUsername] = useState("");
  const [userList, setUserList] = useState([]);
  const [lastUser, setLastUser] = useState("");
  const deleteStorage = () => {
    localStorage.removeItem("isConnect");
    localStorage.removeItem("userName");
    setIsLog(false);
  };
  const getUser = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/users-list/");
      console.log("response", response);
      setUserList(response.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    const isConnect = localStorage.getItem("isConnect");
    const isUsername = localStorage.getItem("userName");
    isConnect !== null ? setIsLog(true) : setIsLog(false);
    if (isUsername !== null) setUsername(isUsername);
    getUser();
  }, [isLog, lastUser]);

  return (
    <AuthContext.Provider
      value={{
        isLog,
        setIsLog,
        deleteStorage,
        username,
        setUsername,
        userList,
        setLastUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.object,
};

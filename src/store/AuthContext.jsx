import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLog, setIsLog] = useState();
  const [username, setUsername] = useState("");
  const [userList, setUserList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [lastUser, setLastUser] = useState("");
  const deleteStorage = () => {
    localStorage.removeItem("isConnect");
    localStorage.removeItem("userName");
    setIsLog(false);
  };
  const getUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/users-list/");
      setUserList(response.data);
    } catch (err) {}
  };
  const getCategories = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/category-list/");
      setCategoryList(response.data);
    } catch (err) {}
  };

  const getProducts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/products-list/");

      setProductList(response.data);
    } catch (err) {}
  };

  const postProduct = async (data) => {
    try {
      const reponse = await axios.post(
        "http://127.0.0.1:8000/post-product/",
        data
      );
    } catch (err) {}
  };

  useEffect(() => {
    const isConnect = localStorage.getItem("isConnect");
    const isUsername = localStorage.getItem("userName");
    isConnect !== null ? setIsLog(true) : setIsLog(false);
    if (isUsername !== null) setUsername(isUsername);
    getUsers();
    getCategories();
    getProducts();
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
        categoryList,
        setCategoryList,
        productList,
        postProduct,
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

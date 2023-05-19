import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import theme from "./theme_site";

export const AuthContext = createContext();
const token = localStorage.getItem("jwt");

function AuthProvider({ children }) {
  const [isLog, setIsLog] = useState();
  const [username, setUsername] = useState("");
  const [userList, setUserList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [lastUser, setLastUser] = useState("");
  const [create, setCreate] = useState(false);
  const [isModal, setIsModal] = useState({
    isOpen: false,
    type: "",
    id: null,
    wording: "",
  });
  const [language, setLanguage] = useState("fr");
  const [clickLink, setClickLink] = useState({});

  const deleteStorage = () => {
    localStorage.removeItem("isConnect");
    localStorage.removeItem("userName");
    setIsLog(false);
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_DEPLOY_ENDPOINT}/users-list/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setUserList(response.data);
    } catch (err) {}
  };
  const getCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_DEPLOY_ENDPOINT}/category-list/`
      );
      setCategoryList(response.data);
    } catch (err) {}
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_DEPLOY_ENDPOINT}/products-list/`
      );

      setProductList(response.data);
    } catch (err) {}
  };

  const postProduct = async (data) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_DEPLOY_ENDPOINT}/post-product/`,
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
  }, [isLog, lastUser, create]);

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
        create,
        setCreate,
        isModal,
        setIsModal,
        language,
        setLanguage,
        theme,
        clickLink,
        setClickLink,
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

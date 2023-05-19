import { useForm } from "react-hook-form";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Toastify from "toastify-js";
import { AuthContext } from "../../store/AuthContext";

function useFormHandler(defaultValues = {}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const {
    isLog,
    setIsLog,
    username,
    productList,
    create,
    setIsModal,
    language,
    theme,
  } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    (isLog || errorMessage.length !== 0) &&
      Toastify({
        text: isLog ? "bienvenue !" : errorMessage,
        duration: 3000,
        style: {
          textalign: "center",
          background: isLog
            ? "linear-gradient(to right, #00b09b, #96c93d)"
            : "linear-gradient(to right, #ec6889, #e62a2a)",

          color: "#ffffff",
        },
      }).showToast();
  }, [isLog, errorMessage]);

  useEffect(() => {}, [create]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DEPLOY_ENDPOINT}/login-user/`,
        data
      );

      if (response.status === 200) {
        setIsLog(true);
        localStorage.setItem("jwt", response.data.access);
        localStorage.setItem("isConnect", true);
        localStorage.setItem("userName", data.username);
        reset();
      } else {
        setErrorMessage("Mot de passe ou identifiant incorrects");
      }
    } catch (error) {
      setIsLog(false);
    }
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    onSubmit,
    isLog,
    username,
    productList,
    showPassword,
    setShowPassword,
    setIsModal,
    language,
    theme,
  };
}

export default useFormHandler;

import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useEffect } from "react";
import Toastify from "toastify-js";
import { AuthContext } from "../../store/AuthContext";
import { useState } from "react";

function useFormHandler(defaultValues = {}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const { isLog, setIsLog, username } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

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

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/login-user/",
        data
      );

      if (response.data.success === true) {
        setIsLog(true);
        localStorage.setItem("isConnect", true);
        localStorage.setItem("userName", response.data.userName);
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
  };
}

export default useFormHandler;

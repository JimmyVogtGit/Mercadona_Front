import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useEffect } from "react";
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

  const { isLog, setIsLog, username } = useContext(AuthContext);

  useEffect(() => {
    isLog &&
      Toastify({
        text: isLog ? "bienvenue !" : "Mot de passe ou identifiant incorrects",

        duration: 3000,
        style: {
          textalign: "center",
          background: isLog
            ? "linear-gradient(to right, #00b09b, #96c93d)"
            : "linear-gradient(to right, #ec6889, #e62a2a)",

          color: "#ffffff",
        },
      }).showToast();
  }, [isLog]);

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

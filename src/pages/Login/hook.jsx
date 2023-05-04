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
  const [backResponse, setBackResponse] = useState({});
  const { isLog, setIsLog } = useContext(AuthContext);

  useEffect(() => {
    Object.keys(backResponse).length !== 0 &&
      Toastify({
        text:
          Object.keys(backResponse).length !== 0 &&
          (backResponse.data.success === true
            ? "bienvenue !"
            : "Mot de passe ou identifiant incorrects"),

        duration: 3000,
        style: {
          textalign: "center",
          background: backResponse.data.success
            ? "linear-gradient(to right, #00b09b, #96c93d)"
            : "linear-gradient(to right, #ec6889, #e62a2a)",

          color: "#ffffff",
        },
      }).showToast();
  }, [backResponse, isLog]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/login-user/",
        data
      );
      setBackResponse(response);
      if (response.data.success === true) {
        setIsLog(true);
        localStorage.setItem("isConnect", true);
      }
    } catch (error) {
      setBackResponse(error);
    }
  };

  return { register, handleSubmit, reset, errors, onSubmit, isLog };
}

export default useFormHandler;

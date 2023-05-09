import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

function useModalHook(type) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { categoryList } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      if (type === "PRODUCT") {
        const response = await axios.post(
          "http://127.0.0.1:8000/create-product/",
          data
        );
        alert("coucou", response);
      }
      if (type === "PROMO") {
        const response = await axios.post(
          "http://127.0.0.1:8000/create-promotion/",
          data
        );
        alert("coucou", response);
      }
    } catch (error) {
      alert("coucou", error);
    }
  };

  return { register, handleSubmit, reset, errors, onSubmit, categoryList };
}

export default useModalHook;

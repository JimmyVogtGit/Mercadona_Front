import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

function useModalHook() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { categoryList } = useContext(AuthContext);

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/create-product/",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { register, handleSubmit, reset, errors, onSubmit, categoryList };
}

export default useModalHook;

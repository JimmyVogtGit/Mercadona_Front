import { useForm } from "react-hook-form";
import axios from "axios";

function useFormHandler(defaultValues = {}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const response = await axios.post("http://127.0.0.1:8000/create-user/", {
        email: data.email,
        name: data.name,
        password: data.password,
      });
      console.log(response.data); // Affiche les données de la réponse dans la console
    } catch (error) {
      console.error(error);
    }
  };

  return { register, handleSubmit, reset, errors, onSubmit };
}

export default useFormHandler;

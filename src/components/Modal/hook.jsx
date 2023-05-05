import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

function useModalHook() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/create-product/",
        data
      );
    } catch (error) {}
  };

  return { register, handleSubmit, reset, errors, onSubmit, handleImageChange };
}

export default useModalHook;

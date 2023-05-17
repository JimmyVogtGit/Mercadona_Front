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
          `${import.meta.env.VITE_DEPLOY_ENDPOINT}/create-product/`,
          data
        );
        alert("Produit ajouté avec succès", response);
      }
      if (type === "PROMO") {
        const response = await axios.post(
          `${import.meta.env.VITE_DEPLOY_ENDPOINT}/create-promotion/`,
          data
        );
        alert("Promotion ajoutée avec succès", response);
      }
    } catch (error) {
      alert("Erreur à l'ajout du produit", error);
    }
  };

  return { register, handleSubmit, reset, errors, onSubmit, categoryList };
}

export default useModalHook;

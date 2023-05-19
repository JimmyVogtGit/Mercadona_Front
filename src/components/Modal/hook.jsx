import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/AuthContext";

function useModalHook() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    categoryList,
    setCreate,
    create,
    setIsModal,
    isModal,
    language,
    theme,
  } = useContext(AuthContext);
  const [category, setCategory] = useState("");

  const openAlert = (type) => {
    alert(
      `${
        type === "PRODUCT"
          ? `${theme.themeText[language].product}`
          : `${theme.themeText[language].product}`
      } ${theme.themeText[language].addSuccess}`
    );
    setIsModal({ isOpen: false });
    setCreate(!create);
  };

  const onSubmit = async (data) => {
    try {
      if (isModal.type === "PRODUCT") {
        await axios.post(
          `${import.meta.env.VITE_DEPLOY_ENDPOINT}/create-product/`,
          data
        );
      }
      if (isModal.type === "PROMO") {
        await axios.post(
          `${import.meta.env.VITE_DEPLOY_ENDPOINT}/create-promotion/`,
          data
        );
      }
      openAlert(isModal.type);
    } catch (error) {
      alert(`${theme.themeText[language].addFailure}`, error);
    }
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    onSubmit,
    categoryList,
    category,
    setCategory,
    handleChange,
    setCreate,
    setIsModal,
    isModal,
    language,
    theme,
  };
}

export default useModalHook;

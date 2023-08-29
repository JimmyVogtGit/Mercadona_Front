import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/AuthContext";
import * as yup from "yup";

function useModalHook() {
  const schema = yup
    .object({
      wording: yup.string().required("Libellé erroné"),
      describe: yup.string().required("Description erroné"),
      price: yup.number().required("Prix erroné"),
      category: yup.string().required("Catégory erronée"),
      percent: yup.number().required("Prix erroné"),
      startDate: yup.date().required(),
      endDate: yup.date().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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

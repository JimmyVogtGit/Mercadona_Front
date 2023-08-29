import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
  Image,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Toastify from "toastify-js";
import { AuthContext } from "../../store/AuthContext";

function useFormHandler() {
  const schema = yup
    .object({
      username: yup.string().required("Ajoutez un nom d'utilisateur"),
      password: yup.string().required("Ajoutez un mot de passe"),
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
    isLog,
    setIsLog,
    username,
    productList,
    create,
    setIsModal,
    language,
    theme,
  } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  useEffect(() => {}, [create]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DEPLOY_ENDPOINT}/login-user/`,
        data
      );

      if (response.status === 200) {
        setIsLog(true);
        localStorage.setItem("jwt", response.data.access);
        localStorage.setItem("isConnect", true);
        localStorage.setItem("userName", data.username);
        reset();
      } else {
        setErrorMessage("Mot de passe ou identifiant incorrects");
      }
    } catch (error) {
      setIsLog(false);
    }
  };

  const styles = StyleSheet.create({
    page: {
      fontFamily: "Helvetica",
      fontSize: 12,
      padding: 20,
    },
    section: {
      marginBottom: "auto",
      display: "flex",
      flexDirection: "row",
    },
    title: {
      marginBottom: 20,
    },
    text: {
      marginRight: 10,
    },
    textColor: {
      color: "red",
    },
    img: {
      marginLeft: 50,
      height: 100,
      width: 100,
    },
  });

  const handleDownloadPDF = async () => {
    const content = (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.title}>Liste des produits en promotion</Text>
          {productList
            .filter((promo) => promo.promotion.length !== 0)
            .map((eachPromo, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.text}>{eachPromo.wording}</Text>
                <Text style={styles.text}>{eachPromo.price}</Text>
                <Text style={styles.textColor}>
                  {parseInt(eachPromo.price) -
                    (parseInt(eachPromo.price) *
                      parseInt(eachPromo.promotion[0].percentage)) /
                      100}
                </Text>
                <Image
                  src={
                    theme.themeImg.filter(
                      (cat) => cat.catName === eachPromo.category
                    )[0].url
                  }
                  style={styles.img}
                />
              </View>
            ))}
        </Page>
      </Document>
    );

    const blob = await pdf(content).toBlob(); // Convert to Blob
    saveAs(blob, "mon_fichier.pdf");
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    onSubmit,
    isLog,
    username,
    productList,
    showPassword,
    setShowPassword,
    setIsModal,
    language,
    theme,
    handleDownloadPDF,
  };
}

export default useFormHandler;

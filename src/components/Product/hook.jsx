import { AuthContext } from "../../store/AuthContext";
import { useContext, useEffect, useState } from "react";

function useProductHook(category) {
  const { postProduct, create, setIsModal, language, theme, clickLink } =
    useContext(AuthContext);

  const [imgSelected, setImgSelected] = useState("");

  useEffect(() => {
    const catFiltered = theme.themeImg.filter(
      (cat) => cat.catName === category
    );
    const randomNumber = Math.floor(Math.random() * (catFiltered.length - 1));
    setImgSelected(catFiltered[randomNumber].url);
  }, [create, clickLink]);

  return { postProduct, setIsModal, language, theme, imgSelected };
}

export default useProductHook;

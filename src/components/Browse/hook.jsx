import { useContext, useState } from "react";
import { AuthContext } from "../../store/AuthContext";

function useBrowserHook() {
  const { isLog, deleteStorage, language, setLanguage, theme } =
    useContext(AuthContext);
  const [isFr, setIsFr] = useState(false);

  const handleToggle = () => {
    setIsFr(!isFr);
    setLanguage(language === "fr" ? "es" : "fr");
  };

  return { isLog, deleteStorage, language, theme, isFr, handleToggle };
}

export default useBrowserHook;

import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

function useHomepageHook() {
  const { language, theme } = useContext(AuthContext);
  const retail = theme.themeImg.filter((cat) => cat.name === "retail");
  const gadget = theme.themeImg.filter((cat) => cat.name === "gadgets");
  return { language, theme, retail, gadget };
}

export default useHomepageHook;

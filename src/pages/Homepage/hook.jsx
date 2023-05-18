import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

function useHomepageHook() {
  const { language, theme } = useContext(AuthContext);
  return { language, theme };
}

export default useHomepageHook;

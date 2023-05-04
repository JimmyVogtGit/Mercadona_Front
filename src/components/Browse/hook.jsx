import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

function useBrowserHook() {
  const { isLog, deleteStorage } = useContext(AuthContext);

  return { isLog, deleteStorage };
}

export default useBrowserHook;

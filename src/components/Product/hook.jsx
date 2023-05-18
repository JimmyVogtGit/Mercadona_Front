import { AuthContext } from "../../store/AuthContext";
import { useContext, useEffect } from "react";

function useProductHook() {
  const { postProduct, create, setIsModal, language, theme } =
    useContext(AuthContext);

  useEffect(() => {}, [create]);

  return { postProduct, setIsModal, language, theme };
}

export default useProductHook;

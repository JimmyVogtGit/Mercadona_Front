import { AuthContext } from "../../store/AuthContext";
import { useContext, useEffect } from "react";

function useProductHook() {
  const { postProduct, create, setIsModal } = useContext(AuthContext);

  useEffect(() => {}, [create]);

  return { postProduct, setIsModal };
}

export default useProductHook;

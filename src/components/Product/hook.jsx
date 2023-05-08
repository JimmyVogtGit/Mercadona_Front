import { AuthContext } from "../../store/AuthContext";
import { useContext, useState } from "react";

function useProductHook() {
  const { postProduct } = useContext(AuthContext);
  const [isPromoModal, setIsPromoModal] = useState(false);

  return { postProduct, isPromoModal, setIsPromoModal };
}

export default useProductHook;

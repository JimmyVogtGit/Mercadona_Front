import { AuthContext } from "../../store/AuthContext";
import { useContext } from "react";

function useCatalogHook() {
  const { isLog, productList } = useContext(AuthContext);
  console.log("isLog", isLog);
  return { isLog, productList };
}

export default useCatalogHook;

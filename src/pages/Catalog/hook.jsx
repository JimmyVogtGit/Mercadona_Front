import { AuthContext } from "../../store/AuthContext";
import { useContext, useState, useEffect } from "react";

function useCatalogHook() {
  const { isLog, productList, categoryList, language, theme } =
    useContext(AuthContext);
  const [filteredCat, setFilteredCat] = useState([]);

  useEffect(() => {
    setFilteredCat(productList);
  }, [categoryList]);

  const filterCat = (filterName) => {
    const filteredCat = productList.filter(
      (cat) => cat.category === filterName
    );

    setFilteredCat(filteredCat);
  };

  return {
    isLog,
    productList,
    categoryList,
    filteredCat,
    filterCat,
    language,
    theme,
  };
}

export default useCatalogHook;

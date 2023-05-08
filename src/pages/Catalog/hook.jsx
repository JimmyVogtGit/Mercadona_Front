import { AuthContext } from "../../store/AuthContext";
import { useContext, useState, useEffect } from "react";

function useCatalogHook() {
  const { isLog, productList, categoryList } = useContext(AuthContext);
  const [filteredCat, setFilteredCat] = useState([]);

  useEffect(() => {
    setFilteredCat(productList);
  }, [categoryList]);

  const filterCat = (filterName) => {
    const test = productList.filter((cat) => cat.category === filterName);

    setFilteredCat(test);
  };

  return { isLog, productList, categoryList, filteredCat, filterCat };
}

export default useCatalogHook;

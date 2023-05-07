import hook from "./hook";
import Product from "../../components/Product";
import { CatalogContainer } from "./styles";

function Catalog() {
  const { isLog, productList } = hook();
  console.log("productList--->", productList);
  return (
    <div>
      <h1>Catalogue Mercadona</h1>
      <CatalogContainer>
        {productList.map((product, index) => {
          return (
            <Product key={index} wording={product.wording} isLog={isLog} />
          );
        })}
      </CatalogContainer>
    </div>
  );
}

export default Catalog;

import hook from "./hook";
import Product from "../../components/Product";
import {
  ListCatalogContainer,
  AsideContainer,
  CatalogContainer,
  Container,
} from "./styles";

function Catalog() {
  const { isLog, categoryList, filterCat, filteredCat } = hook();
  return (
    <Container>
      <h1>Catalogue Mercadona</h1>
      <CatalogContainer>
        <AsideContainer>
          <ul>
            {categoryList.map((cat) => {
              return (
                <li onClick={() => filterCat(cat.name)} key={cat.id}>
                  {cat.name}
                </li>
              );
            })}
          </ul>
        </AsideContainer>
        <ListCatalogContainer>
          {filteredCat.length === 0 ? (
            <p>Aucun produit trouvé</p>
          ) : (
            filteredCat.map((product, index) => {
              return (
                <Product
                  key={index}
                  id={product.id}
                  wording={product.wording}
                  describe={product.describe}
                  price={product.price}
                  promotion={product.promotion}
                  isLog={isLog}
                />
              );
            })
          )}
        </ListCatalogContainer>
      </CatalogContainer>
    </Container>
  );
}

export default Catalog;

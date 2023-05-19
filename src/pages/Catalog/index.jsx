import hook from "./hook";
import Product from "../../components/Product";
import {
  ListCatalogContainer,
  AsideContainer,
  CatalogContainer,
  Container,
} from "./styles";

function Catalog() {
  const { isLog, categoryList, filterCat, filteredCat, language, theme } =
    hook();
  return (
    <Container>
      <h1>{theme.themeText[language].catalog}</h1>
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
      <CatalogContainer>
        <ListCatalogContainer>
          {filteredCat.length === 0 ? (
            <p>{theme.themeText[language].noProduct}</p>
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
                  category={product.category}
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

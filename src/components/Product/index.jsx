import PropTypes from "prop-types";
import { ProductContainer } from "./styles";

function Product({ isLog, wording }) {
  return (
    <ProductContainer>
      <h1>{wording}</h1>
      {isLog && <button>Ajouter promo</button>}
    </ProductContainer>
  );
}

export default Product;

Product.propTypes = {
  id: PropTypes.number,
  wording: PropTypes.string,
  describe: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  image: PropTypes.object,
  isLog: PropTypes.bool,
};

import PropTypes from "prop-types";
import { ProductContainer, PromoContainer, DescribeContainer } from "./styles";
import img from "../../assets/img/beauTemps.jpg";
import hook from "./hook";
import Modal from "../Modal";

function Product({ isLog, wording, describe, price, id, promotion }) {
  const { isPromoModal, setIsPromoModal } = hook();
  return (
    <ProductContainer>
      {isPromoModal && (
        <Modal
          type="PROMO"
          id={id}
          wording={wording}
          setIsPromoModal={setIsPromoModal}
        />
      )}
      <img src={img} alt="img-product" />
      <h2>{wording}</h2>
      <DescribeContainer>{describe}</DescribeContainer>
      {promotion.length === 0 ? (
        <p>{price} e</p>
      ) : (
        <PromoContainer>
          <p>{price} e</p>
          <p>
            En promotion{" "}
            {parseInt(price) -
              (parseInt(price) * parseInt(promotion[0].percentage)) / 100}
            e
          </p>
        </PromoContainer>
      )}

      {isLog && (
        <button onClick={() => setIsPromoModal(true)}>Ajouter promo</button>
      )}
    </ProductContainer>
  );
}

export default Product;

Product.propTypes = {
  id: PropTypes.number,
  wording: PropTypes.string,
  describe: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  isLog: PropTypes.bool,
  promotion: PropTypes.array,
};

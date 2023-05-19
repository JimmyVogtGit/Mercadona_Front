import PropTypes from "prop-types";
import {
  ProductContainer,
  PromoContainer,
  DescribeContainer,
  ImageContainer,
} from "./styles";
import hook from "./hook";

import { Button } from "@mui/material";

function Product({ isLog, wording, describe, price, promotion, id, category }) {
  const { setIsModal, language, theme, imgSelected } = hook(category);

  return (
    <>
      <ProductContainer>
        <ImageContainer src={imgSelected} />
        <h2>{wording}</h2>
        <DescribeContainer>{describe}</DescribeContainer>
        {promotion.length === 0 || promotion[0].percentage === 0 ? (
          <p>{price} e</p>
        ) : (
          <PromoContainer>
            <p>{price} e </p>
            <p>
              {theme.themeText[language].isPromo}{" "}
              {parseInt(price) -
                (parseInt(price) * parseInt(promotion[0].percentage)) / 100}
              e
            </p>
          </PromoContainer>
        )}

        {isLog && (
          <Button
            id="button-promo"
            variant="contained"
            color="warning"
            size="small"
            onClick={() =>
              setIsModal({
                isOpen: true,
                type: "PROMO",
                id: id,
                wording: wording,
              })
            }
          >
            {theme.themeButton[language].addPromo}
          </Button>
        )}
      </ProductContainer>
    </>
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

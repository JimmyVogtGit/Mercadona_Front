import styled from "styled-components";

export const ProductContainer = styled.div`
  height: auto;
  width: 200px;
  border: 1px solid black;
  text-align: center;
  border-radius: 20px;
  padding-bottom: 10px;
  margin: 20px;
  img {
    height: 150px;
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

export const PromoContainer = styled.span`
  p:first-child {
    text-decoration: line-through;
  }
  p:last-child {
    font-weight: bold;
    color: red;
  }
`;

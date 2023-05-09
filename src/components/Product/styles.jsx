import styled from "styled-components";

export const ProductContainer = styled.div`
  height: 400px;
  width: 300px;
  border: 1px solid black;
  text-align: center;
  border-radius: 10px;
  padding-bottom: 10px;
  margin: 20px;
  img {
    height: 200px;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  :hover {
    -webkit-box-shadow: 5px 5px 20px -14px #000000;
    box-shadow: 5px 5px 20px -14px #000000;
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

import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  padding-bottom: 10px;
  margin: 20px;
  background-color: white;
  overflow: hidden;

  :hover {
    -webkit-box-shadow: 5px 5px 20px -14px #000000;
    box-shadow: 5px 5px 20px -14px #000000;
  }
`;

export const ImageContainer = styled.div`
  height: 250px;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

export const DescribeContainer = styled.p`
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

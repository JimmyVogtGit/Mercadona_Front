import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

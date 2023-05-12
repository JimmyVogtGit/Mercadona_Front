import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }
`;

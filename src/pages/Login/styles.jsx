import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 20px;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;

  form {
    display: flex;
    flex-direction: column;
  }

  * {
    margin-top: 10px;
  }
`;
export const ErrorTextForm = styled.span`
  color: red;
  margin: 10px;
`;

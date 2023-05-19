import styled from "styled-components";

export const FormContainer = styled.div`
  position: absolute;
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }

  * {
    margin-top: 10px;
  }
`;

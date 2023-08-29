import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 20px;

  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  * {
    margin-top: 20px;
  }
  button {
    margin-top: 20px;
  }

  label:first-child {
    font-weight: bold;
  }
`;

export const ErrorTextForm = styled.span`
  color: red;
  margin: 10px;
`;

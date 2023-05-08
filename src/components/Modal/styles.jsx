import styled from "styled-components";
import close from "../../assets/img/close.png";

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const ModalContainer = styled.div`
  width: 600px;
  height: 600px;
  background-color: white;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  input {
    width: 70%;
  }
`;

export const CloseModal = styled.button`
  position: relative;
  right: -275px;
  top: 10px;
  width: 27px;
  height: 59px;
  background-color: transparent;
  border: none;
  background-image: url(${close});
  background-size: contain;
  background-repeat: no-repeat;
`;

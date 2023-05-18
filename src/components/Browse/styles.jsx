import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;

  a {
    text-decoration: none;
    background-color: #e02727;
    border-radius: 20px;
    padding: 10px;
    color: #f8f8f8;
  }

  li {
    margin: 30px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SwitchContainer = styled.div`
  position: fixed;
  top: 150px;
  right: 20px;
  display: flex;
  align-items: center;
  font-weight: bolder;
  color: ${({ isFr }) => (isFr ? "#ffffff" : "#E02727")};
`;

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-right: 10px;
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ isFr }) => (isFr ? "#ebe72b" : "#ffffff")};

  border-radius: 20px;
  transition: background-color 0.2s;
  cursor: pointer;

  &::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: ${({ isFr }) => (isFr ? "20px" : "4px")};
    bottom: 2px;
    background-color: ${({ isFr }) => (isFr ? "#ffffff" : "#4f7dc2")};
    border-radius: 50%;
    transition: left 0.2s;
  }
`;

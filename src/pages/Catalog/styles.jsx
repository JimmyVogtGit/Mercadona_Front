import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
  }
`;
export const CatalogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const AsideContainer = styled.aside`
  background-color: rgb(224, 39, 39);
  height: auto;
  width: auto;
  position: fixed;
  top: 250px;
  left: 20px;
  border-radius: 10px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    color: white;
    height: auto;
    padding: 0;
  }
  li {
    cursor: pointer;
    padding: 6px;
    margin: 5px;
  }
  li:hover {
    color: #275c80;
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    position: static;
    background-color: rgb(224, 39, 39);
    width: 80%;
    align-items: center;
    justify-content: center;
    height: 70px;
    overflow-x: auto;
    white-space: nowrap;
    ul {
      width: auto;
      height: 100%;
      flex-direction: row;
      color: white;
      justify-content: flex-start;
      align-items: center;
      margin: 0 5px 0 5px;
    }
  }
`;

export const ListCatalogContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const NoProductContainer = styled.div`
  margin: 0;
  height: 100vh;
`;

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
  width: 80%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ListCatalogContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const AsideContainer = styled.aside`
  ul {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 100px;
    left: 20px;
    justify-content: center;
    list-style-type: none;
    border-radius: 10px;
    background-color: rgb(224, 39, 39);
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
    width: 100%;
    ul {
      flex-direction: row;
      position: static;
      overflow-x: auto;
      white-space: nowrap;
    }
  }
`;

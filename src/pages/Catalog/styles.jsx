import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const CatalogContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 0 0 0 200px;
  width: 80%;
`;

export const ListCatalogContainer = styled.div`
  width: 100%;
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
  margin-left: 20px;
  position: fixed;
  left: 20px;
  top: 200px;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
  }
  li {
    cursor: pointer;
    margin: 5px;
    width: 80px;
  }
  li:hover {
    background-color: #7ea4af40;
  }

  @media only screen and (max-width: 600px) {
    ul {
      flex-direction: column;
    }
  }
`;

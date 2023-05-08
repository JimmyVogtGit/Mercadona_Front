import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ListCatalogContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const AsideContainer = styled.aside`
  width: 700px;

  ul {
    list-style-type: none;
    display: flex;
  }
  li {
    cursor: pointer;
    margin: 5px;
    width: 80px;
  }
  li:hover {
    background-color: red;
  }

  @media only screen and (max-width: 600px) {
    ul {
      flex-direction: column;
    }
  }
`;

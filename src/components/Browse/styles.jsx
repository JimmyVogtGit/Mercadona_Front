import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;

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

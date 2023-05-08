import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    margin: 10px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

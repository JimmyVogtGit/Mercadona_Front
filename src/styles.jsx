import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

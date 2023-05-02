import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-evenly;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

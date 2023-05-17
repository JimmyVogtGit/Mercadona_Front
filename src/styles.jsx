import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 20px;
  height: 50px;
  h1 {
    color: #e02727;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const SpanContainer = styled.span`
  font-size: 0.5em;
  color: #275c80;
`;

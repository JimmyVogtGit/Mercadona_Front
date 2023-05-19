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

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  height: 130px;
  width: 100%;
  background-color: #275c80;

  * {
    margin-right: 20px;
    color: white;
  }

  h3 {
    font-family: "jua";
    color: #ffffff;
  }

  span {
    margin: 0;
    font-size: 0.8em;
    color: #e02727;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 600px) {
    align-items: center;
    * {
      margin: 0;
    }
    p {
      margin-top: 10px;
    }
  }
`;

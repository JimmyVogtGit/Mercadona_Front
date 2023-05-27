import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    width: 80%;
  }
`;

export const SectionContainer = styled.div`
  width: 80%;

  h1 {
    font-size: bolder;
    font-family: "jua";
  }

  section {
    margin-top: 100px;
  }

  p {
    font-size: 1.5em;
    font-weight: bolder;
    width: 60%;
    text-align: justify;
  }

  img {
    height: 100px;
    width: 200px;
  }

  @media only screen and (max-width: 600px) {
    p {
      width: 100%;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 500px;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 20px;
`;

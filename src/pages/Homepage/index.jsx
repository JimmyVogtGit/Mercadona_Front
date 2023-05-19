import { HomepageContainer, SectionContainer, ImageContainer } from "./styles";
import hook from "./hook";

function Homepage() {
  const { language, theme, retail, gadget } = hook();

  return (
    <>
      <HomepageContainer>
        <h1>{theme.themeText[language].welcome}</h1>
        <SectionContainer>
          <section>
            <h1>{theme.themeText[language].titleSectionDescribe}</h1>
            <ImageContainer src={retail[0].url}></ImageContainer>
            <p className="left">{theme.themeText[language].titleDescribe}</p>
          </section>
          <section>
            <h1>{theme.themeText[language].titleSectionGadget}</h1>
            <ImageContainer src={gadget[0].url}></ImageContainer>

            <p className="right">{theme.themeText[language].titleGadget}</p>
          </section>
        </SectionContainer>
      </HomepageContainer>
    </>
  );
}

export default Homepage;

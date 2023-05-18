import { HomepageContainer } from "./styles";
import hook from "./hook";

function Homepage() {
  const { language, theme } = hook();
  console.log("themeText", theme.themeText[language].welcome);
  return (
    <HomepageContainer>
      <h1>{theme.themeText[language].welcome}</h1>
      <div>
        <section>
          <h1>{theme.themeText[language].titleSectionDescribe}</h1>
          <p>{theme.themeText[language].titleDescribe}</p>
        </section>
        <section>
          <h1>{theme.themeText[language].titleSectionGadget}</h1>
          <p>{theme.themeText[language].titleGadget}</p>
        </section>
      </div>
    </HomepageContainer>
  );
}

export default Homepage;

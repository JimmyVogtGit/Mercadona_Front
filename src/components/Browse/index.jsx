import { Link } from "react-router-dom";
import hook from "./hook";

import { ListContainer, SwitchContainer, SwitchLabel, Slider } from "./styles";

function Browse() {
  const { isLog, deleteStorage, language, theme, isFr, handleToggle } = hook();
  return (
    <nav>
      <ListContainer>
        <li>
          <Link to="/catalog">{theme.themeButton[language].catalog}</Link>
        </li>
        <li>
          {" "}
          <Link to="/login">{theme.themeButton[language].admin}</Link>
        </li>
        {isLog && (
          <li>
            {" "}
            <Link to="/login" onClick={() => deleteStorage()}>
              {theme.themeButton[language].disconnect}
            </Link>
          </li>
        )}
      </ListContainer>
      <SwitchContainer>
        <SwitchLabel>
          <input type="checkbox" checked={isFr} onChange={handleToggle} />
          <Slider isFr={isFr} />
        </SwitchLabel>
        <span>{isFr ? "es" : "fr"}</span>
      </SwitchContainer>
    </nav>
  );
}

export default Browse;

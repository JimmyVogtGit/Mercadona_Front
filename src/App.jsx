import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Browse from "./components/Browse";
import Modal from "./components/Modal";
import {
  HeaderStyle,
  LinkStyle,
  SpanContainer,
  FooterContainer,
  AppContainer,
} from "./styles";
import { AuthContext } from "./store/AuthContext";

function App() {
  const { isModal, create, language, theme } = useContext(AuthContext);
  useEffect(() => {}, [create]);

  return (
    <AppContainer>
      <HeaderStyle>
        <LinkStyle to="/">
          <h1>
            Mercadona <SpanContainer>Retail</SpanContainer>
          </h1>
        </LinkStyle>

        <Browse />
      </HeaderStyle>

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <FooterContainer>
        <h3>
          Mercadona <span>Retail</span>&reg;
        </h3>
        <p>{theme.themeText[language].contact}</p>
        <p>{theme.themeText[language].policy}</p>
        <p>{theme.themeText[language].legacy}</p>
      </FooterContainer>
      {isModal.isOpen && (
        <Modal type={isModal.type} id={isModal.is} wording={isModal.wording} />
      )}
    </AppContainer>
  );
}

export default App;

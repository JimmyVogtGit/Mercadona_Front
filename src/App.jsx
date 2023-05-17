import "./App.css";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Browse from "./components/Browse";
import Modal from "./components/Modal";
import { HeaderStyle, LinkStyle, SpanContainer } from "./styles";
import { AuthContext } from "./store/AuthContext";

function App() {
  const { isModal } = useContext(AuthContext);

  return (
    <>
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
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {isModal.isOpen && (
        <Modal type={isModal.type} id={isModal.is} wording={isModal.wording} />
      )}
    </>
  );
}

export default App;

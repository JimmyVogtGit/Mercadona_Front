import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Browse from "./components/Browse";
import { HeaderStyle, LinkStyle } from "./styles";

function App() {
  return (
    <>
      <HeaderStyle>
        <LinkStyle to="/">
          <h1>Mercadona Retail</h1>
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
    </>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InicioPage from "./pages/InicioPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import CadastroPage from "./pages/CadastroPage.jsx";
import DetalhePage from "./pages/DetalhePage.jsx";
import MeusAnunciosPage from "./pages/MeusAnunciosPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/detalhe" element={<DetalhePage />} />
        <Route path="/meus-anuncios" element={<MeusAnunciosPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

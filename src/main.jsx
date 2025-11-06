import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InicioPage from "./pages/InicioPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import CadastroPage from "./pages/CadastroPage.jsx";
import DetalhePage from "./pages/DetalhePage.jsx";
import MeusAnunciosPage from "./pages/MeusAnunciosPage.jsx";
import UseEffectPage from "./pages/UseEffectPage.jsx";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route  path="/anuncio/:id" 
        element={
        <ProtectedRoute>
          <DetalhePage/>
        </ProtectedRoute> 
        }
        />
        
        <Route path="/meus-anuncios" element={
          <ProtectedRoute>
            <MeusAnunciosPage/>
        </ProtectedRoute>
      }/>
        <Route path="/useeffect" element={<UseEffectPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Boutiques from "./pages/Boutiques";
import Contact from "./pages/Contact";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import MHommes from "./pages/MHommes";
import MFemmes from "./pages/MFemmes";
import MEnfants from "./pages/MEnfants";
import MCouples from "./pages/MCouples";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boutiques" element={<Boutiques />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/register" element={<Inscription />} />
        <Route path="/modèleshommes" element={<MHommes />} />
        <Route path="/modèlesfemmes" element={<MFemmes />} />
        <Route path="/modèlesenfants" element={<MEnfants />} />
        <Route path="/modèlescouples" element={<MCouples />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

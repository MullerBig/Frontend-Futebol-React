import { Routes, Route } from "react-router-dom";
import Jogadores from "./pages/Jogadores/Jogadores";
import Home from "./pages/home/Home";
import Confirmar from "./pages/Confirmar/Confirmar";
import Futebol from "./pages/Futebol/Futebol"
import Grupos from "./pages/Grupos/Grupos";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Jogadores" element={<Jogadores />} />
      <Route path="/Confirmar" element={<Confirmar />} />
      <Route path="/Futebol" element={<Futebol />} />
      <Route path="/Grupos" element={<Grupos />} />
    </Routes>
    </div>
  );
}

export default App;

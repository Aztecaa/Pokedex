import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Pokedex from "./components/Pokedex";
import PokemonDetail from "./components/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/Pokedex" element={<Pokedex />} />
            <Route path="/PokemonDetail/:id" element={<PokemonDetail/>} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

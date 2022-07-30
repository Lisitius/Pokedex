import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import RandomPokePage from "./pages/RandomPokePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/randompoke" element={<RandomPokePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

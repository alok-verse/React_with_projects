import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import About from "./assets/About";
import Navbar from "./assets/Navbar";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </StrictMode>
  );
}

export default App;
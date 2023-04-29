import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";

function App() {
  const [sun, setSun] = useState(true);

  return (
    <div className="App">
      <Navbar sun={sun} setSun={setSun} />
      <div className={`Pages ${sun ? "lightMode" : "darkMode"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;


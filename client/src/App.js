import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Home from "./Pages/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
  const [sun, setSun] = useState(true);

  return (
    <div className="App">
      <Navbar sun={sun} setSun={setSun} />
      <div className={`Pages ${sun ? "lightMode" : "darkMode"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;


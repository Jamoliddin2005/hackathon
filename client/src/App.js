import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Auth from "./components/Auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./Pages/Admin/Admin";
import Teams from "./Pages/Admin/Teams/Teams";
import Category from "./Pages/Admin/Category/Category";
import News from "./Pages/Admin/News/News";
import More from "./Pages/More/More";

function App() {
  const [sun, setSun] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const getTokenHandler = async (req, res) => {
    await fetch("http://localhost:8080/verify", {
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          setIsAdmin(res.token);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTokenHandler();
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Navbar
        sun={sun}
        setSun={setSun}
        isAdmin={isAdmin}
        getTokenHandler={getTokenHandler}
      />
      <div className={`Pages ${sun ? "lightMode" : "darkMode"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/auth"
            element={
              isAdmin ? (
                <Navigate to="/" />
              ) : (
                <Auth getTokenHandler={getTokenHandler} />
              )
            }
          />
          <Route
            path="/admin"
            element={isAdmin ? <Admin /> : <Navigate to="/auth" />}
          />
          <Route
            path="/teams"
            element={isAdmin ? <Teams /> : <Navigate to="/auth" />}
          />
          <Route path="/news/*" element={<More />} />
          <Route
            path="/category"
            element={isAdmin ? <Category /> : <Navigate to="/auth" />}
          />
          <Route
            path="/news"
            element={isAdmin ? <News /> : <Navigate to="/auth" />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

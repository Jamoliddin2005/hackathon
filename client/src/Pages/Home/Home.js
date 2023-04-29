import React from "react";
import "./Home.css";
import Categories from "./Categories";
import Main from "./Main";
import LatestNews from "./LatestNews";

function Home() {
  return (
    <div className={"Home"}>
      <div className="container">
        <Categories />
        <Main />
        <LatestNews />
      </div>
    </div>
  );
}

export default Home;

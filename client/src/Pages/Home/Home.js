import React from "react";
import "./Home.css";
import Categories from "./Categories";
import Main from "./Main";
import LatestNews from "./LatestNews";
import AllNews from "./AllNews";

function Home() {
  return (
    <div className={"Home"}>
      <div className="container">
        <Categories />
        <Main />
        <LatestNews />
        <AllNews />
      </div>
    </div>
  );
}

export default Home;

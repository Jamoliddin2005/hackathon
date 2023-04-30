import React, { useEffect, useState } from "react";
import "./Main.css";
import List from "./List";

function Main() {
  // const [activeNew, setActiveNew] = useState("");

  const [news, setNews] = useState([""].reverse());

  const getNews = async () => {
    await fetch("http://localhost:8080/news/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setNews(res));
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="Main">
      <div className="container">
        <div className="row main__row">
          <div className="main__left">
            <div className="active__new">
              <div className="bg_news">
                <img src={`/uploads/${news[0].img}`} alt="" />
              </div>
              <div className="front_new">
                <h3>{news[0].title}</h3>
                <p>{news[0].date}</p>
              </div>
            </div>
            <div className="row news__row">
              {news.map((item, index) => (
                <div className="news__item" key={index}>
                  <div className="bg_news">
                    <img src={`/uploads/${item.img}`} alt="" />
                  </div>
                  <div className="front_new">
                    {item.title && <h3>{item.title.slice(0, 60) + "..."}</h3>}
                    <p>{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="main__right">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

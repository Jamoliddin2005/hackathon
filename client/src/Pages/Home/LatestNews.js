import React, { useEffect, useState } from "react";
import "./LatestNews.css";
import { Link } from "react-router-dom";

function LatestNews() {
  const [news, setNews] = useState([""]);

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
    <div className="LatestNews">
      <div className="container">
        <div className="titleLatestNews">
          <h2>So'ngi yangiliklar</h2>
        </div>
        <div className="row latest_news">
          {news &&
            news.map((item, index) => (
              <Link to={`/news/${item._id}`} className="new" key={index}>
                <img src={`/uploads/${item.img}`} alt="" />
                {item.title && <h3>{item.title.slice(0, 60) + "..."}</h3>}
                <span>{item.date}</span>
              </Link>
            ))}
        </div>
        <button className="btn_all">Barchasi ko’rish</button>
      </div>
    </div>
  );
}

export default LatestNews;

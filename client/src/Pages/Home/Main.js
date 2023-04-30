import React, { useEffect, useState } from "react";
import "./Main.css";
import List from "./List";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function Main() {
  // const [activeNew, setActiveNew] = useState("");
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([""]);

  const getNews = async () => {
    setLoading(true);
    await fetch("http://localhost:8080/news/first", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setNews(res);
        setLoading(false);
      });
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="Main">
      <div className="container">
        <div className="row main__row">
          <div className="main__left">
            {loading ? (
              <Loading />
            ) : (
              news[0] && (
                <div
                  className="active__new"
                  onClick={(e) => {
                    window.location.href = `/news/${news[0]._id}`;
                  }}
                >
                  <div className="bg_news">
                    <img src={`/uploads/${news[0].img}`} alt="" />
                  </div>
                  <div className="front_new">
                    <h3>{news[0].title}</h3>
                    <p>{news[0].date}</p>
                  </div>
                </div>
              )
            )}
            <div className="row news__row">
              {news &&
                news.map((item, index) => (
                  <Link
                    to={`/news/${item._id}`}
                    className="news__item"
                    key={index}
                  >
                    <div className="bg_news">
                      <img src={`/uploads/${item.img}`} alt="" />
                    </div>
                    <div className="front_new">
                      {item.title && <h3>{item.title.slice(0, 60) + "..."}</h3>}
                      <p>{item.date}</p>
                    </div>
                  </Link>
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

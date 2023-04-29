import React, { useState } from "react";
import "./Main.css";
import List from "./List";

function Main() {
  // const [activeNew, setActiveNew] = useState("");

  const news = [
    {
      img: "/images/newsNew.png",
      text: "Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga olib boradi: bo'g'inlar oldidagi barcha maketlar",
      date: "2 soat oldin",
      _id: 0,
    },
    {
      img: "/images/newsNew.png",
      text: "Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi",
      date: "3 soat oldin",
      _id: 1,
    },
    {
      img: "/images/newsNew.png",
      text: "Argentina terma jamoasi Braziliya bilan durang o'ynadi",
      date: "4 soat oldin",
      _id: 2,
    },
    {
      img: "/images/newsNew.png",
      text: "MYu Sulsherni iste'foga chiqarishga qaror qildi",
      date: "4 soat oldin",
      _id: 3,
    },
    {
      img: "/images/newsNew.png",
      text: "MYu Sulsherni iste'foga chiqarishga qaror qildi",
      date: "4 soat oldin",
      _id: 4,
    },
    {
      img: "/images/newsNew.png",
      text: "MYu Sulsherni iste'foga chiqarishga qaror qildi",
      date: "4 soat oldin",
      _id: 5,
    },
  ];

  return (
    <div className="Main">
      <div className="container">
        <div className="row main__row">
          <div className="main__left">
            <div className="active__new">
              <div className="bg_news">
                <img src={news[0].img} alt="" />
              </div>
              <div className="front_new">
                <h3>{news[0].text}</h3>
                <p>{news[0].date}</p>
              </div>
            </div>
            <div className="row news__row">
              {news.map((item, index) => (
                <div className="news__item" key={index}>
                  <div className="bg_news">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="front_new">
                    <h3>{item.text}</h3>
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

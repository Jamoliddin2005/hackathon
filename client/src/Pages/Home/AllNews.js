import React from "react";
import { Link } from "react-router-dom";

function AllNews() {
  const news = [
    {
      img: "/images/newsNew.png",
      title:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      desc: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',
      date: "12.05.2021  12:54",
      _id: 0,
    },
    {
      img: "/images/newsNew.png",
      title:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      desc: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',
      date: "12.05.2021  12:54",
      _id: 0,
    },
    {
      img: "/images/newsNew.png",
      title:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      desc: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',
      date: "12.05.2021  12:54",
      _id: 0,
    },
    {
      img: "/images/newsNew.png",
      title:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      desc: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',
      date: "12.05.2021  12:54",
      _id: 0,
    },
    {
      img: "/images/newsNew.png",
      title:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      desc: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',
      date: "12.05.2021  12:54",
      _id: 0,
    },
    {
      img: "/images/newsNew.png",
      title:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      desc: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',
      date: "12.05.2021  12:54",
      _id: 0,
    },
    {
      img: "/images/newsNew.png",
      title:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      desc: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',
      date: "12.05.2021  12:54",
      _id: 0,
    },
    {
      img: "/images/newsNew.png",
      title:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      desc: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',
      date: "12.05.2021  12:54",
      _id: 0,
    },
    {
      img: "/images/newsNew.png",
      title:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      desc: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',
      date: "12.05.2021  12:54",
      _id: 0,
    },
    {
      img: "/images/newsNew.png",
      title:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      desc: 'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',
      date: "12.05.2021  12:54",
      _id: 0,
    },
  ];
  return (
    <div className="LatestNews AllNews">
      <div className="container">
        <div className="titleLatestNews">
          <h2>Barcha yangiliklar</h2>
        </div>
        <div className="row latest_news">
          {news.map((item, index) => (
            <Link to={`/news/${item._id}`} className="new" key={index}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>{item.date}</span>
            </Link>
          ))}
        </div>
        <button className="btn_all">Barchasi ko’rish</button>
      </div>
    </div>
  );
}

export default AllNews;

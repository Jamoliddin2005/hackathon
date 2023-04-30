import React, { useEffect, useState } from "react";
import "./More.css";
import Loading from "../../components/Loading/Loading";

function More() {
  const MoreID = window.location.href.split("/")[4];

  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);

  const GetMoreNews = async () => {
    setLoading(true);
    await fetch(`http://localhost:8080/news/${MoreID}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.newNews);
        setLoading(false);
      });
  };
  useEffect(() => {
    GetMoreNews();
  }, []);
  return (
    <div className="More">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div className="article">
            <p>{product.date}</p>
            <h2>{product.title}</h2>
            <img src={`/uploads/${product.img}`} alt="" />
            <div
              className="desc"
              dangerouslySetInnerHTML={{ __html: product.body }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default More;

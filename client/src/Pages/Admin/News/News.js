import React, { useEffect, useState } from "react";
import "./News.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { toast } from "react-toastify";

function News() {
  const [value, setValue] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");

  // news

  const [news, setNews] = useState([""]);

  const AddNewsHandler = async () => {
    const ProductForm = new FormData();
    ProductForm.append("data", value);
    ProductForm.append("title", title);
    ProductForm.append("img", img);
    const NewsCreate = await axios.post(
      "http://localhost:8080/news/create",
      ProductForm,
      {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      }
    );
    if (NewsCreate.data) {
      getNews();
      return toast.success("News added!");
    }
  };

  const getNews = async () => {
    await fetch("http://localhost:8080/news/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setNews(res));
  };

  const DeleteHandler = async (_id) => {
    await axios
      .delete(`http://localhost:8080/news/delete/${_id}`, {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="News__page">
      <div className="container">
        <form encType="multipart/form-data">
          <input
            type="text"
            value={title}
            placeholder="TITLE"
            onChange={(e) => setTitle(e.target.value)}
          />
          <CKEditor
            editor={ClassicEditor}
            data="<p>Yangiliklarni shu yerda yoriting</p>"
            onChange={(event, editor) => {
              const data = editor.getData();
              setValue(data);
            }}
          />
          <input
            type="file"
            name=""
            id=""
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              AddNewsHandler();
            }}
          >
            Submit
          </button>
        </form>
        <div className="news_admin_page">
          {news &&
            news.map((item, index) => (
              <div className="item_news" key={index}>
                <img src={`/uploads/${item.img}`} alt="" />
                <h3>{item.title}</h3>
                <span
                  className="btn_delete"
                  onClick={(e) => {
                    DeleteHandler(item._id);
                  }}
                >
                  <img
                    src="http://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                    alt=""
                  />
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default News;

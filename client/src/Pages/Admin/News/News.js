import React, { useState } from "react";
import "./News.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function News() {
  const [value, setValue] = useState("");
  const [img, setImg] = useState("");

  const AddNewsHandler = async () => {
    console.log(value);
  };

  return (
    <div className="News__page">
      <div className="container">
        <form encType="multipart/form-data">
          <CKEditor
            editor={ClassicEditor}
            data="<p>Yangiliklarni shu yerda yoriting</p>"
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
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
      </div>
    </div>
  );
}

export default News;

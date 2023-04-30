import axios from "axios";
import React, { useState } from "react";

function Teams() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const TeamCreateHandler = async () => {
    const test = await axios.post(
      "http://localhost:8080/team/create",
      {
        name: name,
        img: img,
      },
      {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      }
    );
    console.log(test);
  };

  return (
    <div className="Teams">
      <form>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            TeamCreateHandler();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Teams;

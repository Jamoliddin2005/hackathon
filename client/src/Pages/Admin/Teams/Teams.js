import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Teams.css";

function Teams() {
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);

  // Teams
  const [teams, setTeams] = useState([""]);

  const TeamCreateHandler = async () => {
    const ProductForm = new FormData();
    ProductForm.append("name", name);
    ProductForm.append("img", img);

    await axios
      .post("http://localhost:8080/team/create", ProductForm, {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data) {
          return toast.success("Team added");
        }
      })
      .catch((err) => {
        if (err.response.data) {
          return toast.error(err.response.data.msg);
        }
      });
  };

  const GetTeams = async () => {
    await fetch("http://localhost:8080/team", {
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTeams(res);
      });
  };

  useEffect(() => {
    GetTeams();
  }, []);

  const DeleteHandler = async (id) => {
    await fetch(`http://localhost:8080/team/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    });
  };

  return (
    <div className="Teams_Big">
      <div className="container">
        <form encType="multipart/form-data">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="file"
            name="img"
            id=""
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
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

        <div className="teams_div">
          {teams &&
            teams.map((item, index) => (
              <div className="item_team" key={index}>
                {item.img && <img src={`/uploads/${item.img}`} alt="" />}
                <h4>{item.name}</h4>
                <span
                  onClick={(e) => {
                    DeleteHandler(item._id);
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
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

export default Teams;

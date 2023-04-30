import React, { useEffect, useState } from "react";
import "./Category.css";
import { toast } from "react-toastify";
import axios from "axios";

function Category() {
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);

  // Teams
  const [categories, setCategories] = useState([""]);
  const [teams, setTeams] = useState([""]);

  // Match
  const [categoryId, setCategoryId] = useState("");
  const [teamOne, setTeamOne] = useState("");
  const [teamTwo, setTeamTwo] = useState("");
  const [scoreOne, setScoreOne] = useState("");
  const [scoreTwo, setScoreTwo] = useState("");
  const [oldOrNew, setOldOrNew] = useState("");
  const [date, setDate] = useState("");

  const CategoryCreateHandler = async () => {
    const ProductForm = new FormData();
    ProductForm.append("name", name);
    ProductForm.append("img", img);

    await axios
      .post("https://hackaton-8i99.onrender.com/category/create", ProductForm, {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data) {
          GetCategories();
          return toast.success("Team added");
        }
      })
      .catch((err) => {
        if (err.response.data) {
          return toast.error(err.response.data.msg);
        }
      });
  };

  const GetCategories = async () => {
    await fetch("https://hackaton-8i99.onrender.com/category", {
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
      });
  };
  const GetTeams = async () => {
    await fetch("https://hackaton-8i99.onrender.com/team", {
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
    GetCategories();
    GetTeams();
  }, []);

  const DeleteHandler = async (id) => {
    await fetch(`https://hackaton-8i99.onrender.com/category/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    });
    GetCategories();
  };

  const DreamCreateHandler = async () => {
    if (teamOne === teamTwo) {
      return toast.error("One Team can not match");
    } else {
      if (categoryId !== "") {
        const Post = await axios.post(
          `https://hackaton-8i99.onrender.com/category/create/${oldOrNew}/team/${categoryId}`,
          {
            team1: teamOne,
            team2: teamTwo,
            score1: Number(scoreOne),
            score2: Number(scoreTwo),
            time: date,
          },
          {
            headers: {
              Authorization: sessionStorage.getItem("token"),
            },
          }
        );
        if (Post.data) {
          return toast.success("Added!");
        }
      }
    }
  };

  return (
    <div className="Teams_Big">
      <div className="container">
        <div className="row">
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
                CategoryCreateHandler();
              }}
            >
              Submit
            </button>
          </form>

          <form className="team_match">
            <select
              name=""
              id=""
              onClick={(e) => {
                const SplitV = e.target.value.split(" ");
                setCategoryId(SplitV[0]);
                setOldOrNew(SplitV[1]);
              }}
            >
              {categories &&
                categories.map((item, index) => (
                  <option value={`${item._id} ${item.oldOrNew}`} key={index}>
                    {item.name} {item.oldOrNew}
                  </option>
                ))}
            </select>
            <select name="" id="" onClick={(e) => setTeamOne(e.target.value)}>
              {teams &&
                teams.map((item, index) => (
                  <option value={item._id} key={index}>
                    {item.name}
                  </option>
                ))}
            </select>
            <select name="" id="" onClick={(e) => setTeamTwo(e.target.value)}>
              {teams &&
                teams.map((item, index) => (
                  <option value={item._id} key={index}>
                    {item.name}
                  </option>
                ))}
            </select>
            <div className="scores">
              <input
                type="number"
                name=""
                id=""
                placeholder="Score..."
                value={scoreOne}
                max={30}
                onChange={(e) => setScoreOne(e.target.value)}
              />
              <input
                type="number"
                name=""
                max={30}
                id=""
                placeholder="Score..."
                value={scoreTwo}
                onChange={(e) => setScoreTwo(e.target.value)}
              />
              <input
                type="datetime-local"
                name=""
                id=""
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                DreamCreateHandler();
              }}
            >
              Submit
            </button>
          </form>
        </div>

        <div className="teams_div">
          {categories &&
            categories.map((item, index) => (
              <div className="item_team" key={index}>
                {item.img && <img src={`/uploads/${item.img}`} alt="" />}
                <h4>
                  {item.name} {item.oldOrNew}
                </h4>
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

export default Category;

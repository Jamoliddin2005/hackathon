import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [activeCategoryTop, setActiveCategoryTop] = useState("");
  const [activeCategoryBottom, setActiveCategoryBottom] = useState("");

  const topCategories = [
    {
      img: "/images/footbalicon.png",
      text: "Italiya. Seriya A",
      _id: 0,
      teams: [
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          date: "11.11.2021 23:59",
          _id: 0,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 1,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 2,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 3,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 4,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 5,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 6,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 7,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 8,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 9,
        },
      ],
    },
    {
      img: "/images/footbalicon.png",
      text: "Italiya. Seriya A",
      _id: 1,
      teams: [
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 0,
        },
      ],
    },
    {
      img: "/images/footbalicon.png",
      text: "Italiya. Seriya A",
      _id: 2,
      teams: [
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 0,
        },
      ],
    },
    {
      img: "/images/footbalicon.png",
      text: "Italiya. Seriya A",
      _id: 3,
      teams: [
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 0,
        },
      ],
    },
  ];  

  const bottomCategories = [
    {
      img: "/images/footbalicon.png",
      text: "Italiya. Seriya A",
      _id: 0,
      teams: [
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          date: "11.11.2021 23:59",
          _id: 0,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 1,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 2,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 3,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 4,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 5,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 6,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 7,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 8,
        },
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 9,
        },
      ],
    },
    {
      img: "/images/footbalicon.png",
      text: "Italiya. Seriya A",
      _id: 1,
      teams: [
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 0,
        },
      ],
    },
    {
      img: "/images/footbalicon.png",
      text: "Italiya. Seriya A",
      _id: 2,
      teams: [
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 0,
        },
      ],
    },
    {
      img: "/images/footbalicon.png",
      text: "Italiya. Seriya A",
      _id: 3,
      teams: [
        {
          team1: "Barcelona",
          score1: 3,
          score2: 0,
          team2: "Liverpool",
          _id: 0,
        },
      ],
    },
  ]; 

  return (
    <div className={"Home"}>
      <div className="container">
        <div className={"categories"}>
          <div className={"newCategories"}>
            <div className={"top"}>
              <div className={"topCategory"}>
                {topCategories.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`item ${
                        item._id === activeCategoryTop ? "active" : ""
                      } ${
                        activeCategoryTop === "" && index === 0 ? "active" : ""
                      }`}
                      onClick={(e) => {
                        setActiveCategoryTop(item._id);
                      }}
                    >
                      <img src={item.img} alt="" />
                      <h3>{item.text}</h3>
                    </div>
                  );
                })}
              </div>
              <div className={"categories_bottom"}>
                {activeCategoryTop === ""
                  ? topCategories[0].teams.map((item, index) => (
                      <div className={"team"} key={index}>
                        <div className={"team_Top"}>
                          <div className={`${"teamsDir"} ${"teamsDir1"}`}>
                            <img src="/images/footbalicon.png" alt="" />
                            <h4>{item.team1}</h4>
                          </div>
                          <h3>
                            <span>{item.score1} : </span> {item.score2}
                          </h3>
                          <div className={"teamsDir"}>
                            <h4>{item.team2}</h4>
                            <img src="/images/footbalicon.png" alt="" />
                          </div>
                        </div>
                        <div className={"team_Bottom"}>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    ))
                  : topCategories[activeCategoryTop].teams.map(
                      (item, index) => (
                        <div className={"team"} key={index}>
                          <div className={"team_Top"}>
                            <div className={`${"teamsDir"} ${"teamsDir1"}`}>
                              <img src="/images/footbalicon.png" alt="" />
                              <h4>{item.team1}</h4>
                            </div>
                            <h3>
                              <span>{item.score1} : </span> {item.score2}
                            </h3>
                            <div className={"teamsDir"}>
                              <h4>{item.team2}</h4>
                              <img src="/images/footbalicon.png" alt="" />
                            </div>
                          </div>
                          <div className={"team_Bottom"}>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      )
                    )}
              </div>
            </div>
            <div className={"top second"}>
              <div className={"topCategory"}>
                {bottomCategories.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`item ${
                        item._id === activeCategoryBottom ? "active" : ""
                      } ${
                        activeCategoryBottom === "" && index === 0 ? "active" : ""
                      }`}
                      onClick={(e) => {
                        setActiveCategoryBottom(item._id);
                      }}
                    >
                      <img src={item.img} alt="" />
                      <h3>{item.text}</h3>
                    </div>
                  );
                })}
              </div>
              <div className={"categories_bottom"}>
                {activeCategoryBottom === ""
                  ? bottomCategories[0].teams.map((item, index) => (
                      <div className={"team"} key={index}>
                        <div className={"team_Top"}>
                          <div className={`${"teamsDir"} ${"teamsDir1"}`}>
                            <img src="/images/footbalicon.png" alt="" />
                            <h4>{item.team1}</h4>
                          </div>
                          <h3>
                            <span>{item.score1} : </span> {item.score2}
                          </h3>
                          <div className={"teamsDir"}>
                            <h4>{item.team2}</h4>
                            <img src="/images/footbalicon.png" alt="" />
                          </div>
                        </div>
                        <div className={"team_Bottom"}>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    ))
                  : bottomCategories[activeCategoryBottom].teams.map(
                      (item, index) => (
                        <div className={"team"} key={index}>
                          <div className={"team_Top"}>
                            <div className={`${"teamsDir"} ${"teamsDir1"}`}>
                              <img src="/images/footbalicon.png" alt="" />
                              <h4>{item.team1}</h4>
                            </div>
                            <h3>
                              <span>{item.score1} : </span> {item.score2}
                            </h3>
                            <div className={"teamsDir"}>
                              <h4>{item.team2}</h4>
                              <img src="/images/footbalicon.png" alt="" />
                            </div>
                          </div>
                          <div className={"team_Bottom"}>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      )
                    )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

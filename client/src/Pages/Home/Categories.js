import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

function Categories() {
  const [loading, setLoading] = useState(false);
  const [activeCategoryTop, setActiveCategoryTop] = useState("");
  const [activeCategoryBottom, setActiveCategoryBottom] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const [topCategories, setTopCategories] = useState([""]);
  const [bottomCategories, setBottomCategories] = useState([""]);

  const GetCategories = async (e) => {
    setLoading(true);
    fetch("http://localhost:8080/categories", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.new) {
          setFirst(res.new[0].teams);
          setTopCategories(res.new);
        }
        if (res.old) {
          setSecond(res.old[0].teams);
          setBottomCategories(res.old);
        }

        setLoading(false);
      });
  };

  useEffect(() => {
    GetCategories();
  }, []);

  return (
    <div className={"categories"}>
      <div className={"newCategories"}>
        <div className={"top"}>
          <div className={"topCategory"}>
            {loading ? (
              <Loading />
            ) : (
              topCategories &&
              topCategories.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`item ${
                      item._id === activeCategoryTop ? "active" : ""
                    } ${
                      activeCategoryTop === "" && index === 0 ? "active" : ""
                    }`}
                    onClick={(e) => {
                      setFirst(item.teams);
                      setActiveCategoryTop(item._id);
                    }}
                  >
                    <img src={`/uploads/${item.img}`} alt="" />
                    <h3>{item.name}</h3>
                  </div>
                );
              })
            )}
          </div>
          <div className={"categories_bottom"}>
            {first &&
              first.map((item, index) => (
                <div className={"team"} key={index}>
                  <div className={"team_Top"}>
                    <div className={`teamsDir teamsDir1`}>
                      {item.team1.img && (
                        <img src={`/uploads/${item.team1.img}`} alt="" />
                      )}

                      <h4>{item.team1.name}</h4>
                    </div>
                    <h3>
                      <span>{item.score1} : </span> {item.score2}
                    </h3>
                    <div className={"teamsDir"}>
                      <h4>{item.team2.name}</h4>
                      <img src={`/uploads/${item.team2.img}`} alt="" />
                    </div>
                  </div>
                  <div className={"team_Bottom"}>
                    <span>{item.time}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={"top second"}>
          <div className={"topCategory"}>
            {loading ? (
              <Loading />
            ) : (
              bottomCategories.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`item ${
                      item._id === activeCategoryBottom ? "active" : ""
                    } ${
                      activeCategoryBottom === "" && index === 0 ? "active" : ""
                    }`}
                    onClick={(e) => {
                      setSecond(item.teams);
                      setActiveCategoryBottom(item._id);
                    }}
                  >
                    <img src={`/uploads/${item.img}`} alt="" />
                    <h3>{item.name}</h3>
                  </div>
                );
              })
            )}
          </div>
          <div className={"categories_bottom"}>
            {second &&
              second.map((item, index) => (
                <div className={"team"} key={index}>
                  <div className={"team_Top"}>
                    <div className={`teamsDir teamsDir1`}>
                      <img src={`/uploads/${item.team1.img}`} alt="" />
                      <h4>{item.team1.name}</h4>
                    </div>
                    <h3>
                      <span>{item.score1} : </span> {item.score2}
                    </h3>
                    <div className={"teamsDir"}>
                      <h4>{item.team2.name}</h4>
                      <img src={`/uploads/${item.team2.img}`} alt="" />
                    </div>
                  </div>
                  <div className={"team_Bottom"}>
                    <span>{item.time}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;

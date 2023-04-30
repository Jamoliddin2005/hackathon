import React, { useEffect, useState } from "react";
import Select from "react-select";

function List() {
  const [category, setCategory] = useState([""]);
  const [activeTeams, setActiveTeams] = useState([""]);

  const GetCategoryHandler = async () => {
    fetch("http://localhost:8080/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setCategory(res));
  };

  useEffect(() => {
    GetCategoryHandler();
  }, []);

  return (
    <div className="List">
      <div className="list__header">
        <h4>Jadval</h4>
        {category.length > 1 ? (
          <Select
            defaultInputValue={category[0].name}
            onChange={(e) => setActiveTeams(e.teams)}
            options={category.map((x) => {
              return { value: x.name, label: x.name, teams: x.teams };
            })}
            className="select__category"
          />
        ) : (
          ""
        )}

        <div className="list_navbar">
          <div className="left_list_nav">
            <span>№</span>
            <span>Команда</span>
          </div>
          <div className="right_list_nav">
            <span>И</span>
            <span>О</span>
          </div>
        </div>
        <div className="lists">
          {activeTeams &&
            activeTeams.length > 1 &&
            activeTeams.map((item, index) => (
              <div className="list_item_div" key={index}>
                <div className="list_item_left">
                  <h5>{index + 1}</h5>
                  {item.teamId && (
                    <img src={`/uploads/${item.teamId.img}`} alt="" />
                  )}
                  {item.teamId && <h5>{item.teamId.name}</h5>}
                </div>
                <div className="list_item_right">
                  <span>{item.matchCount}</span>
                  <span>{item.score}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default List;

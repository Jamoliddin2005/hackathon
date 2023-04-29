import React from "react"; 
import Select from "react-select";

function List() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const lists = [
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 0,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 1,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 2,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 3,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 4,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 5,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 8,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
    {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
      {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
      {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
      {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
      {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
      {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
      {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
      {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
      {
      img: "/images/footbalicon.png",
      name: "Barcelona",
      matchCount: 15,
      score: 14,
      _id: 6,
    },
  ];
  return (
    <div className="List">
      <div className="list__header">
        <h4>Jadval</h4>
        <Select options={options} className="select__category" />
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
          {lists.map((item, index) => (
            <div className="list_item_div" key={index}>
              <div className="list_item_left">
                <h5>{index + 1}</h5>
                <img src={item.img} alt="" />
                <h5>{item.name}</h5>
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

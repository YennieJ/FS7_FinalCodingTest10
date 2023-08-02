import React from "react";
import data from "data/data.json";
import "./Main.css";
const Main = () => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img src={require(`${item.poster}`)} alt="" />

          <span>{item.genre}</span>
          <span>{item.star}</span>
          <span>{item.release}</span>
          <span>{item.actor}</span>

          <a href={item.url}>예매하기</a>
        </div>
      ))}
    </>
  );
};

export default Main;

import React from "react";
import data from "data/data.json";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <header>
        <h2>정글 시네마 영화 목록</h2>
        <nav>
          <ul>
            <li>
              <button>현재상영영화</button>
            </li>
            <li>
              <button>개봉예정영화</button>
            </li>
            <li>
              <button>박스오피스</button>
            </li>
          </ul>
        </nav>
      </header>
      <article>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <img src={require(`${item.poster}`)} alt="" />

              <span>{item.genre}</span>
              <span>{item.star}</span>
              <span>{item.release}</span>
              <span>{item.actor}</span>

              <a href={item.url}>예매하기</a>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Main;

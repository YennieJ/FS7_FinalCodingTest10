import React from "react";
import data from "data/data.json";
import "./Main.css";
const Main = () => {
  return (
    <div className="main_container">
      <header className="main_header">
        <h2 className="main_title">정글 시네마 영화 목록</h2>
        <nav>
          <ul className="main_nav">
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
      <article className="main_content">
        <ul className="main_grid">
          {data.map((item) => (
            <li key={item.id} className="movie_item">
              <img
                className="movie_poster"
                src={require(`${item.poster}`)}
                alt={`${item.title} 포스터₩`}
              />
              <h2 className="movie_name">{item.title}</h2>
              <div className="movie_detail">
                <div className="movie_genre">{item.genre}</div>
                <div className="movie_star">{item.star}</div>
                <div className="movie_release">{item.release}</div>
                <div className="movie_actor">{item.actor}</div>
              </div>

              <ul className="link_group">
                <li>
                  <a href={item.url}>예매하기</a>
                </li>
                <li className="trailer-box">
                  <a href="#!" className="trailer">
                    예고편
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Main;

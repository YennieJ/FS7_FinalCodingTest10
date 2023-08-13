import React, { useState } from "react";

import movieJson from "data/data.json";
import movieReverseJson from "data/dataReverse.json";

import "./Main.css";
const Main = () => {
  // jsonData
  const [movieData, setMovieData] = useState(movieJson);

  // nav button
  const movieTyepButton = ["현재상영영화", "개봉예정영화", "박스오피스"];

  // 어떤 nav button을 사용중인지를 알기 위한 useState와 함수
  const [buttonActive, setButtonActive] = useState("현재상영영화");
  const activeMovie = (e) => {
    const activeTitle = e.target.innerText;

    if (activeTitle === "현재상영영화") {
      setMovieData(movieJson);
      setButtonActive("현재상영영화");
    } else if (activeTitle === "개봉예정영화") {
      setMovieData(movieReverseJson);
      setButtonActive("개봉예정영화");
    } else {
      setMovieData(movieJson);
      setButtonActive("박스오피스");
    }
  };

  // trailer , 예매하기 준비중
  const readyTo = (e) => {
    e.preventDefault();
    alert("준비중");
  };

  return (
    <main className="main_container">
      <header className="main_header">
        <h1 className="main_title">정글 시네마 영화 목록</h1>
        {/* 네비게이션 */}
        <nav>
          <ul className="main_nav">
            {movieTyepButton.map((type) => (
              <button
                onClick={activeMovie}
                key={type}
                className={type === buttonActive ? " button_active" : undefined}
              >
                {type}
              </button>
            ))}
          </ul>
        </nav>
      </header>

      {/* 정글 시네마 영화 목록 컨텐츠 */}
      <article className="main_content">
        <h2 className="a11y_hidden">{buttonActive}</h2>
        <ul className="main_grid">
          {movieData.map((item) => (
            <li key={item.id} className="movie_item">
              <img
                className="movie_poster"
                src={require(`${item.poster}`)}
                alt={`${item.title} 포스터`}
              />
              {/* <div className="over_text_cover"> */}
              <h3 className="movie_name">{item.title}</h3>
              {/* </div> */}
              <div className="movie_detail">
                <div className="movie_genre">{item.genre}</div>
                <div className="movie_star">{item.star}</div>
                <div className="movie_release">{item.release}</div>
                <div className="movie_actor">{item.actor}</div>
              </div>
              {/* 외부 링크 */}
              <ul className="link_group">
                <li>
                  <a
                    href={item.url}
                    onClick={item.url === "" ? readyTo : undefined}
                  >
                    예매하기
                  </a>
                </li>
                <li className="trailer-box">
                  <a href="#!" className="trailer" onClick={readyTo}>
                    예고편
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default Main;

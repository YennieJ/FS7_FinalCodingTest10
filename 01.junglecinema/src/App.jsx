import { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [list, setList] = useState(data);

  return (
    <div className="App">
      <h1>Hello word</h1>
      {list.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img src={item.poster} alt="" />
          <span>{item.genre}</span>
          <span>{item.star}</span>
          <span>{item.release}</span>
          <span>{item.actor}</span>

          <a href={item.url}>예매하기</a>
        </div>
      ))}
    </div>
  );
}

export default App;

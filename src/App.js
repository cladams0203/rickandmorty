import React, { useState, useEffect } from "react";
import axios from "axios";
import { CharacterList } from "./components/CharacterList";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/${toggle ? "episode" : "character"}`
      )
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [toggle]);

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      {data && (
        <CharacterList
          characters={data}
          toggle={toggle}
          setToggle={setToggle}
        />
      )}
    </div>
  );
}

export default App;

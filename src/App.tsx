import { useState, useEffect } from "react";
import "./App.css";

interface Iships {
  name: String;
}

function App() {
  const [starships, setStarships] = useState([]);

  const getStarships = () => {
    fetch("https://swapi.dev/api/starships")
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        let starships = json.results.map((ship: Iships) => ship.name);
        setStarships(starships);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getStarships();
    window.addEventListener("focus", getStarships);
  }, []);

  return (
    <div className="App">
      {starships ? (
        <div>
          <button onClick={getStarships}>Get Starships</button>
          <div className="ships">
            {starships.map((ship, idx) => {
              return <h4 key={idx}>{ship}</h4>;
            })}
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default App;

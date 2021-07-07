import React from "react";
import Row from "./Row";
import request from "./Request";

const action = request.actionMovies;
const topMovies = request.topMovies;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row title="Top movies" endpoint={topMovies} />
        <Row title="Action movies" endpoint={action} />
        <Row title="Scary movies" />
        <Row title="Bad movies" />
      </header>
    </div>
  );
}

export default App;

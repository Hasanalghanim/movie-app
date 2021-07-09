import React from "react";
import Row from "./Row";
import Requests from "./Request";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row title="Top" urlEndpoint={Requests.topMovies} />
        <Row title="Action" urlEndpoint={Requests.actionMovies} />
        <Row title="Comady" urlEndpoint={Requests.TopRated} />
      </header>
    </div>
  );
}

export default App;

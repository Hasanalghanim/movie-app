import React from "react";
import Requests from "./Request";

import Row from "./Components/Row";
import FeatureMovie from "./Components/FeatureMovie";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <FeatureMovie urlEndpoint={Requests.topMovies} />
        <div>
          <Row title="Top" urlEndpoint={Requests.topMovies} />
          <Row title="Action" urlEndpoint={Requests.actionMovies} />
          <Row title="Comady" urlEndpoint={Requests.TopRated} />
          <Row title="Top" urlEndpoint={Requests.topMovies} />
          <Row title="Action" urlEndpoint={Requests.actionMovies} />
          <Row title="Comady" urlEndpoint={Requests.TopRated} />
        </div>
        \
      </header>
    </div>
  );
}

export default App;

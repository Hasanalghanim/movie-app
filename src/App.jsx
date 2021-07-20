import React, { useState, useEffect } from "react";
import Requests from "./Request";

import Row from "./Components/Row";
import FeatureMovie from "./Components/FeatureMovie";
import NavBar from "./Components/NavBar";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="preLoader">
          <PropagateLoader color={"#D0021B"} loading={loading} size={35} />
        </div>
      ) : (
        <header className="App-header">
          <NavBar />
          <FeatureMovie urlEndpoint={Requests.topMovies} />
          <div>
            <Row title="Top" urlEndpoint={Requests.topMovies} />
            <Row title="Action" urlEndpoint={Requests.actionMovies} />
            <Row title="Comedy" urlEndpoint={Requests.TopRated} />
            <Row title="Top" urlEndpoint={Requests.topMovies} />
            <Row title="Action" urlEndpoint={Requests.actionMovies} />
            <Row title="Comady" urlEndpoint={Requests.TopRated} />
          </div>
        </header>
      )}
    </div>
  );
}

export default App;

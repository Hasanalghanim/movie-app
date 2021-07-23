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
    }, 500);
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
          <FeatureMovie urlEndpoint={Requests.popular} />
          <div>
            <Row title="Trending" urlEndpoint={Requests.Trending} />
            <Row title="Top Rated" urlEndpoint={Requests.TopRated} />
            <Row title="Comedy" urlEndpoint={Requests.comedy} />
            <Row title="Action" urlEndpoint={Requests.actionMovies} />
            <Row title="Romantic" urlEndpoint={Requests.Romantic} />
          </div>
        </header>
      )}
    </div>
  );
}

export default App;

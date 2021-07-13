import React, { useState, useEffect } from "react";
import axios from "axios";

function FeatureMovie(props) {
  const baseURL = "https://api.themoviedb.org/3/";

  const [data, setData] = useState([]);

  const getData = async () => {
    await axios.get(baseURL + props.urlEndpoint).then((res) => {
      setData(res.data.results);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  let random = Math.floor(Math.random() * 20);
  function randoChecker() {
    if (
      "https://image.tmdb.org/t/p/original" + data[random]?.backdrop_path ==
      null
    ) {
      if (random == 20) {
        random = random--;
      } else {
        random = random++;
      }
    }
  }
  randoChecker();
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data[random]?.backdrop_path})`,
      }}
      className="featureMovie"
    >
      <h1>{data[random]?.title}</h1>
      <small>{data[random]?.release_date.slice(0, 4)} </small>
      <p>{data[random]?.overview.substring(0, 200)}</p>
    </div>
  );
}

export default FeatureMovie;

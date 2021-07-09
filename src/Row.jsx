import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "api_key=ba5e7823bbf4d4c2d17adf631af2bffa";

function Row() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL + "movie/popular?" + apiKey).then((res) => {
      setData(res.data.results);
    });
  }, []);

  function imgPosting(i) {
    return <img src={"https://image.tmdb.org/t/p/w200" + i.poster_path} />;
  }

  console.log(data);
  return <div>{data.map(imgPosting)}</div>;
}

export default Row;

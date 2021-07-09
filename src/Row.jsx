import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";

function Row(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL + props.urlEndpoint).then((res) => {
      setData(res.data.results);
    });
  }, []);

  function imgPosting(i) {
    return (
      <img
        className="pictures"
        src={"https://image.tmdb.org/t/p/original" + i.backdrop_path}
      />
    );
  }

  console.log(data);
  return (
    <div className="genreRow">
      <h2>{props.title}</h2>

      <div className="imageRow">{data.map(imgPosting)}</div>
    </div>
  );
}

export default Row;

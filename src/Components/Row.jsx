import React, { useState, useEffect } from "react";
import ScrollBtn from "./ScrollBtn";
import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";

function Row(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL + props.urlEndpoint).then((res) => {
      setData(res.data.results);
    });
  }, []);

  function imgPoster(i) {
    if (i.backdrop_path === null) {
      return;
    } else {
      return (
        <img
          key={i.id}
          className="pictures"
          src={"https://image.tmdb.org/t/p/original" + i.backdrop_path}
        />
      );
    }
  }

  function leftScroll() {
    document.getElementById(props.title).scrollLeft -= 800;
  }
  function rightScroll() {
    document.getElementById(props.title).scrollLeft += 800;
  }

  return (
    <div className="genreRow">
      <h2>{props.title}</h2>
      <div className="btnrow">
        <ScrollBtn icon="left" className="btn btnLeft" direction={leftScroll} />
        <div className="imageRow" id={props.title}>
          {data.map(imgPoster)}
        </div>
        <ScrollBtn
          icon="right"
          className="btn btnRight"
          direction={rightScroll}
        />
      </div>
    </div>
  );
}

export default Row;

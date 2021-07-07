import React, { useState } from "react";
import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "api_key=ba5e7823bbf4d4c2d17adf631af2bffa";

function Row(props) {
  const [data, setData] = useState([]);

  const getData = async () => {
    let postData;
    await axios.get(baseURL + "movie/popular?" + apiKey).then((res) => {
      postData = res.data.results;
    });
    return postData;
  };

  console.log(data);

  return (
    <div onClick={() => getData().then((res) => setData(res))}>
      <h3>{props.title}</h3>
    </div>
  );
}

export default Row;

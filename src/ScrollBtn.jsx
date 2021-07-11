import React from "react";

function ScrollBtn(props) {
  return (
    <button className={props.className} onClick={props.direction}>
      {props.icon}
    </button>
  );
}

export default ScrollBtn;

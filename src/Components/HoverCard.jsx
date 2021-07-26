import React from "react";

function HoverCard(props) {
  return (
    <div className="HoverCard">
      <div className="CardContainer">
        <h4>{props.title}</h4>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default HoverCard;

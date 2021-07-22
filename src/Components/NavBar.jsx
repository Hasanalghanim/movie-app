import React, { useState } from "react";

function NavBar() {
  const [Scroll, setScroll] = useState(true);

  document.addEventListener("scroll", () => {
    const yAxes = window.scrollY;
    if (yAxes < 50) {
      setScroll(true);
      console.log("whiite");
    } else {
      setScroll(false);
      console.log("black");
    }
  });
  console.log(Scroll);
  return (
    <div className={Scroll ? "navBar" : "navBar Scrolling"}>
      <ul className="nav1">
        <h1> hello</h1>
        <span>LOGO</span>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Top Movies</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
      </ul>
      <ul className="nav2">
        <li>
          <a href="#">Search</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

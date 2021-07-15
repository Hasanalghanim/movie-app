import React from "react";

function NavBar() {
  return (
    <div className="navBar">
      <ul className="nav1">
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

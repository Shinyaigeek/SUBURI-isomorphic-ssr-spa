import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>This is Header</div>
      <ul>
        <li>
          {" "}
          <Link to="/">to Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/about">to About</Link>
        </li>
        <li>
          {" "}
          <Link to="/changeable">to Changeable</Link>
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Search from "../Search/Search";
import Lang from "../Lang/Lang";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div>
          <h1 className="header-title">Event Planner</h1>
        </div>
      </Link>
      <Search />
      <Lang />
    </div>
  );
};

export default Header;

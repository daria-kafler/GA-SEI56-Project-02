import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-start">
        <span className="tag is-dark is-large has-text-light">
          <Link to="/">❄️ ☀️ Homepage ☀️ ❄️</Link>
        </span>
      </div>
      <div className="navbar-end">
        <span className="tag is-dark is-medium has-text-light">
          App in one day project - by Daria
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/dariakafler"
            >
              <img
                src="./iconmonstr-twitter-1-32.png"
                className="twitter-icon"
              ></img>
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/dariakafler/"
            >
              <img
                src="./iconmonstr-linkedin-3-32.png"
                className="linkedin-icon"
              ></img>
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/daria-kafler"
            >
              <img
                src="./iconmonstr-github-1-32.png"
                className="github-icon"
              ></img>
            </a>
          </span>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;

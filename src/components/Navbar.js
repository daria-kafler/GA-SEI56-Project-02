import React from 'react'
import { Link } from 'react-router-dom'

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
          Created by Daria Kafler
          <span>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/dariakafler">
              <img src="./iconmonstr-twitter-1-32.png" className="twitter-icon"></img>
            </a>
          </span>
        </span>
      </div>
    </nav>
  )
}
export default Navbar
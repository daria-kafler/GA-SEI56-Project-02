import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <nav className="navbar is-dark">
      <div className="container has-text-centered">
        <div className="navbar-brand">
          <span className="tag is-dark is-large has-text-light">
            <Link to="/">❄️ ☀️ Homepage ☀️ ❄️</Link>
          </span>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
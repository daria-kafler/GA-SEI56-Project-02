import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <>
      <section className="hero is-warning is-light is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">Take me somewhere</h1>
            <div className="level">
              <div className="leve-left">
                <div className="level-item">
                  <button  className="button is-danger is-light is-medium">
                    <Link to="/warmplace">
                      <span className="warm" role="img" aria-label="sun">☀️</span>
                      Warm
                    </Link>
                  </button>
                </div> 
              </div>
              <div className="level-right">
                <div className="level-item">
                  <button Link to="/coolplace" className="button is-info is-light is-medium">
                    <Link to="/coolplace">
                      <span className="cool" role="img" aria-label="snowflake">❄️</span>
                      Cool
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )

}
export default Home
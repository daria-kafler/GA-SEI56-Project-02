import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">Take me someplace...</h1>
            <div className="level">
              {/* <div className="leve-left"> */}
              <div className="level-item has-text-centered">
                <button className="button is-danger is-large has-text-light">
                  <Link to="/warm">
                    <span className="warm" role="img" aria-label="sun">☀️</span>
                    Warm
                  </Link>
                </button>
              </div>
              {/* </div> */}
              {/* <div className="level-right"> */}
              <div className="level-item has-text-centered">
                <button className="button is-info is-large has-text-light">
                  <Link to="/cool">
                    <span className="cool" role="img" aria-label="snowflake">❄️</span>
                    Cool
                  </Link>
                </button>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )

}
export default Home
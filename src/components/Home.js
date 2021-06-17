import React from 'react'

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
                  <button className="button is-danger is-light is-medium">
                    <span className="warm" role="img" aria-label="sun">☀️</span>
                    <p>Warm</p>
                  </button>
                </div> 
              </div>
              <div className="level-right">
                <div className="level-item">
                  <button className="button is-info is-light is-medium">
                    <span className="cool" role="img" aria-label="snowflake">❄️</span>
                    <p>Cool</p>
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
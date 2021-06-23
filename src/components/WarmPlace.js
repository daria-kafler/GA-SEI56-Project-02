import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getRandomWarmCity } from './cityList/getcity'
// ``

const WarmPlace = () => {

  const [warmPlace, setWarmPlace] = useState({
    temperature: '',
    wind: '',
    description: '',
    forecast: [],
  })

  const [hasError, setHasError] = useState(false)

  const warmcity = getRandomWarmCity()
  
  useEffect(() => {
    const getData = async () => {
      try {
        setWarmPlace(false)
        const { data } = await axios.get(`https://goweather.herokuapp.com/weather/${warmcity.city}`)
        setWarmPlace(data)
      } catch (err) {
        setHasError(true)
        setWarmPlace(false)
      }

    }
    getData()
  }, [])

  // console.log('API has error', hasError)
  // console.log('data received from API', warmPlace)

  return (
    <section>
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            {warmPlace ?
              <>
                <h1 className="title is-1 has-text-centered">{warmcity.city}, {warmcity.country} seems nice at the moment!</h1>
                <div className="container title is-2 has-text-centered">
                  <div key={warmPlace} className="current-weather">
                    <p>{warmPlace.temperature}</p>
                    <p>{warmPlace.wind}</p>
                    <p>{warmPlace.description}</p>
                    <br />
                  </div>
                </div>
                <p className="forecast">Here&apos;s how it&apos;s looking for the next 3 days</p>
                <div className="card">
                  <div className="card-content">
                    {warmPlace.forecast.map((place, index) => {
                      // console.log('place --->', place)
                      return (
                        <div key={index}>
                          <p>Day {place.day}</p>
                          <p>{place.temperature}</p>
                          <p>{place.wind}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="go-buttons">
                  <button className="button is-info is-medium">
                    <a target="_blank" rel="noreferrer" href="https://www.skyscanner.net/">✈️ Let&apos;s gooo</a>
                  </button>
                  <button onClick={() => window.location.reload()} className="button is-info is-medium">
                    What else you got?
                  </button>
                </div>
              </>
              :
              <h2 className="title has-text-centered">
                {hasError ? 'Oops, something went wrong' : 'searching...'}
              </h2>
            }
          </div>
        </div>
      </div>
    </section>
  )

}
export default WarmPlace

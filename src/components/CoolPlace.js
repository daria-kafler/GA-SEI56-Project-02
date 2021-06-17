import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getRandomCoolCity } from './cityList/getcity'
import { Link } from 'react-router-dom'
// ``

const CoolPlace = () => {
  
  const [coolPlace, setCoolPlace] = useState({
    temperature: '',
    wind: '',
    description: '',
    forecast: [],
  })

  const [hasError, setHasError] = useState(false)

  const coolcity = getRandomCoolCity()
  console.log('random cool spread ->', coolcity.city)
  

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://goweather.herokuapp.com/weather/${coolcity.city}`)
        setCoolPlace(data)
      } catch (err) {
        setHasError(true)
        setCoolPlace(false)
      }

    }
    getData()

  }, [])
  console.log('API has error', hasError)
  console.log('data received from API', coolPlace)

  return (
    <section>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            { coolPlace ?
              <>
                <h1 className="title is-1 has-text-centered">{coolcity.city}, {coolcity.country} seems nice at the moment!</h1>
                <div className="container title is-2 has-text-centered">
                  <div key={coolPlace} className="current-weather">
                    <p>{coolPlace.temperature}</p>
                    <p>{coolPlace.wind}</p>
                    <p>{coolPlace.description}</p>
                    <br />
                  </div>
                </div>
                <p className="forecast">Here&apos;s how it&apos;s looking for the next 3 days</p>
                <div className="card">
                  <div className="card-content">
                    {coolPlace.forecast.map((place, index) => {
                      console.log('place --->', place)
                      return (
                        <div key={index}>
                          <p>{place.day}</p>
                          <p>{place.temperature}</p>
                          <p>{place.wind}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="go-buttons">
                  <button className="button is-info is-medium">
                    <a target="_blank" rel="noreferrer" href="https://www.skyscanner.net/">✈️ Let's gooo</a>
                  </button>
                  <button className="button is-info is-medium">
                    <Link to='/warm'> What else you got?</Link>
                  </button>
                </div>
              </>
              :
              <h2 className="title has-text-centered">
                {hasError ? 'Oops, something went wrong' : 'loading...'}
              </h2>

            }

          </div>
        </div>
      </div>
    </section>
  )

}
export default CoolPlace
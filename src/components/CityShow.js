import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getRandomCoolCity, getRandomWarmCity } from './cityList/getcity'

// ``

const CityShow = () => {
  
  const [warmPlace, setWarmPlace] = useState({
    temperature: '',
    wind: '',
    description: '',
    forecast: [],
  })

  const [hasError, setHasError] = useState(false)

  const coolcity = getRandomCoolCity()
  const warmcity = getRandomWarmCity()
  console.log('random cool spread ->', coolcity.city)
  console.log('random warm ->', warmcity.country)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://goweather.herokuapp.com/weather/${coolcity.city}`)
        setWarmPlace(data)
      } catch (err) {
        setHasError(true)
        setWarmPlace(false)
      }

    }
    getData()

  }, [])
  console.log('API has error', hasError)
  console.log('data received from API', warmPlace)

  return (
    <section>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            { warmPlace ?
              <>
                <h1 className="title is-1 has-text-centered">{coolcity.city} seems nice at the moment!</h1>
                <div className="container title is-2 has-text-centered">
                  <div key={warmPlace} className="columns is-multiline">
                    <p>{warmPlace.temperature}</p>
                    <p>{warmPlace.wind}</p>
                    <p>{warmPlace.description}</p>
                    <br />
                  </div>
                </div>
                <p>Forecast for the 3 days</p>
                <div className="card">
                  <div className="card-content">
                    {warmPlace.forecast.map((place, index) => {
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
export default CityShow

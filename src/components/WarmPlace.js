import React, { useEffect, useState } from 'react'
import axios from 'axios'

const WarmPlace = () => {
  const [warmPlace, setWarmPlace] = useState({
    temperature: '',
    wind: '',
    description: '',
    forecast: '[]',
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://goweather.herokuapp.com/weather/Mallorca')
        setWarmPlace(data)
      } catch (err) {
        console.log(err)
      }
      
    }
    getData()
  }, [])

  console.log('warmPlace ->', warmPlace)
  return (
    <secton>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div key={warmPlace} className="columns is-multiline">
              <p>{warmPlace.temperature} {warmPlace.wind} {warmPlace.description}</p>              
              <p>{warmPlace.map(place => {
                return place.forecast[0]
              })}</p>
            </div>
          </div>
        </div>
      </div>
    </secton>
  )

}
export default WarmPlace
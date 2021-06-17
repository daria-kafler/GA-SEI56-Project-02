// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const CoolPlace = () => {
//   const [coolPlace, setCoolPlace] = useState({
//     temperature: '',
//     wind: '',
//     description: '',
//     forecast: [],
//   })

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await axios.get('https://goweather.herokuapp.com/weather/Umea')
//         setCoolPlace(data)
//       } catch (err) {
//         console.log(err)
//       }

//     }
//     getData()
//   }, [])

//   return (
//     <secton>
//       <div className="hero">
//         <div className="hero-body">
//           <div className="container">
//             <h1 className="title is-1 has-text-centered">Placeholder seems nice at the moment!</h1>
//             <div className="container title is-2 has-text-centered">
//               <div key={coolPlace} className="columns is-multiline">
//                 <p>{coolPlace.temperature}</p>
//                 <p>{coolPlace.wind}</p>
//                 <p>{coolPlace.description}</p>
//                 <br />
//               </div>
//             </div>
//             <p>Forecast for the 3 days</p>
//             <div className="card">
//               <div className="card-content">
//                 {coolPlace.forecast.map((place, index) => {
//                   console.log('place', place)
//                   return (
//                     <div key={index}>
//                       <p>{place.day}</p>
//                       <p>{place.temperature}</p>
//                       <p>{place.wind}</p>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </secton>
//   )

// }
// export default CoolPlace
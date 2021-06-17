//Here should have list of cities, in CitiesRandom.js will need to find a way to randomly select a city  
//according to user choice ('warm'/'cold') and pass it into the api url in either WarmPlace.js or CoolPlace.js

//I can’t see a plan in the cities list file but that can definitely work. 
//You can just define an array of cities as strings in a normal const, not as state. 
//Then I would write some functionality that picks one of them randomly and either
// sets it to state or you can then make the api call straight after inside the same 
//function and pass it in

//? my approach- will do cities array. city will call API  and store that in a variable.
//? variable would then pass API response to warm/cool pages.

//?alternatively- can use just one page for city display and change display 
//? with if statements 



const warmCities = [
  {
    city: 'Tel Aviv',
    country: 'Israel',
  },
  {
    city: '	Manaus',
    country: 'Brazil',
  },
  {
    city: 'Malaga',
    country: 'Spain',
  },
  {
    city: 'Durban',
    country: 'South-Africa',
  },
  {
    city: 'Jakarta',
    country: 'Indonesia',
  },
  {
    city: 'Kingston',
    country: 'Jamaica',
  },
  {
    city: 'Aqaba',
    country: 'Jordan',
  },
  {
    city: 'Lagos',
    country: 'Nigeria',
  },
  {
    city: 'Tirana',
    country: 'Albania',
  },
  {
    city: 'Liguria',
    country: 'Italy',
  }
]

const coolCities = [
  {
    city: 'Novosibirsk',
    country: 'Russia',
  },
  {
    city: 'Longyearbyen',
    country: 'Norway',
  },
  {
    city: 'Ulaanbaatar',
    country: 'Mongolia',
  },
  {
    city: 'Yellowknife',
    country: 'Canada',
  },
  {
    city: 'Utqiagvik',
    country: 'USA',
  },
  {
    city: 'Ushuaia',
    country: 'Argentina',
  },
  {
    city: 'Reykjavik',
    country: 'Iceland',
  },
  {
    city: 'Umea',
    country: 'Sweden',
  },
  {
    city: 'Kuopio',
    country: 'Finland',
  },
  {
    city: 'Johannesburg',
    country: 'South-Africa',
  }
]


export function getRandomCoolCity(){
  return coolCities[Math.floor(Math.random() * coolCities.length)]
}
export function getRandomWarmCity(){
  return warmCities[Math.floor(Math.random() * warmCities.length)]
}





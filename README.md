# Project 2 with General Assembly: One day mini React app
## Overview
A one day Hackathon solo project where I planned, designed and built a small front-end app, consuming a weather API.
This is an app for those stuck in one type of weather when they'd much rather be in its complete opposite.
Overall the project took a little over 12 hours.

### Tools used: 
* ReactJS
* Axios
* Node.js 
* Bulma framework
* Git & GitHub

## The app: “Take me someplace…” 

![Screenschot of the project 'warm place' page](https://github.com/daria-kafler/mini-project-react-app/blob/master/images/ProjectScreenshot.png)

You can check it out here >>> [https://mini-react-app.netlify.app/](https://mini-react-app.netlify.app/)

Once in a while, we all want to be in a very different weather system than the one we're currently in. 
Where do you feel like going?

## Approach

Having only one day for this project, I kept the scope for small and simple, but what should I make? It happened to be a hot day and I wished I could be somewhere colder, an 'AHA' moment right there. 
I looked for simple open-source weather API and came across [Roberto Duessmann's](https://github.com/robertoduessmann) [Weather API](https://github.com/robertoduessmann/weather-api), which happened to be one of the few I felt confident in understanding the documentation for at the time.

I drew up a quick wireframe in my notebook and figured I'd flesh things out once I get started.

![Wireframe for project 02 from my notebook](https://raw.githubusercontent.com/daria-kafler/GA-SEI56-Project-02/master/images/wireframeproject02.jpg)

At this point I was planning on integrating a second API- one that would inform the user of any public holidays at their destination, warning against possible service and retails closures effecting their trip, but decided to let it go- no time!

Used Bulmba framework for styling, the documentation of which and getting the hang of took more time than I planned, but I'm glad I took the time to work with a new framework.

## Challenges

* The API I used didn't have an end-point which allowed access to a full list of cities and temperatures, nor a list of countries for those cities.
I decided to create a small seed files for the worlds coldest and warmest cities and the countries they were located in (to help users understand locations of cities unknown to them).

* Initially I also planned to have one component choosing a random 'warm' or 'cool' city from a mixed list (of 'warm' and 'cool'), but the logic implementation for that proved to take a little too long and I decided to have separate, yet identical, components for 'warm' and 'cool'. Not the most efficient but it worked for now.

Each press of the 'warm' and 'cold' buttons sends a GET request to the API with the name of a random city from the relevant seed file.

```export function getRandomCoolCity(){
  return coolCities[Math.floor(Math.random() * coolCities.length)]
}
export function getRandomWarmCity(){
  return warmCities[Math.floor(Math.random() * warmCities.length)]
}
```


## Wins

* When loading a city and its forecast, the name of a different city would momenterily appear before the 'correct' city from API loaded. It took me a long time to realise that the `getRandomCity()` function was simply changing coolCity while a request is being made to the API and useState is updated:

 ```const [coolPlace, setCoolPlace] = useState({})

  const coolcity = getRandomCoolCity()

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
 ```
 
 I solved this by setting the useState to false right before the call to API:
 
  ```useEffect(() => {
    const getData = async () => {
      try {
        setCoolPlace(false)
        const { data } = await axios.get(`https://goweather.herokuapp.com/weather/${coolcity.city}`)
        setCoolPlace(data)
      } catch (err) {
        setHasError(true)
        setCoolPlace(false)
      }
    }
    getData()
  }, [])
 ```
 
* When pressing the 'What else you got?' button on the destination page, I wanted the displayed information to re-render without reloading the entire page. Unfortunately I couldn't find a solution in time and opted for a simple `onClick={() => window.location.reload()}`.

## Key takeaways
* I was surprised how quickly I was able to pick up Bulma framwork, this make me more curious about trying out other frameworks.
* Wireframes are essential!

## Future features
* Improve and refine styling.

## Acknowledgement
Possible thanks to [Roberto Duessmann's](https://github.com/robertoduessmann) [Weather API](https://github.com/robertoduessmann/weather-api)


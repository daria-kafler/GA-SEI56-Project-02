# Project 1 with General Assembly: One day mini React app
## Intro
A one day Hackathon solo project where I planned, designed and built a small front-end app, consuming a simple weather API.

### Tools used: 
* React 
* Axios
* Node.js 
* Bulma framework
* Git & GitHub

## The app: “Take me someplace…” 

![Screenschot of the project 'warm place' page](https://github.com/daria-kafler/mini-project-react-app/blob/master/images/ProjectScreenshot.png)
[Check it out](https://mini-react-app.netlify.app/) 

You can check it out here >>> [https://mini-react-app.netlify.app/](https://mini-react-app.netlify.app/)

Once in a while, we all want to be in a very different weather system than the one we're currently in. 
Where do you feel like going?

## Process and challanges
The API I used didn't have an end-point which allowed access to a full list of cities and temperatures, nor a list of countries forthose cities.
I decided to create a small seed files for the worlds coldest and warmest cities and the countries they were located in (to help user understand locations of cities unknown to them).
Each press of the 'warm' and 'cold' buttons sends a GET request to the API with the name of a random city from the relevant seed file.

```export function getRandomCoolCity(){
  return coolCities[Math.floor(Math.random() * coolCities.length)]
}
export function getRandomWarmCity(){
  return warmCities[Math.floor(Math.random() * warmCities.length)]
}
```

```const coolcity = getRandomCoolCity()

  useEffect(() => {
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

## Future features
* Improve and refine styling




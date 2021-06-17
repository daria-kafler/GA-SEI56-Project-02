// import React, { useState } from 'react'
import 'bulma'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import CityShow from './components/CityShow'
import WarmPlace from './components/WarmPlace'
import CoolPlace from './components/CoolPlace'
import CityPicker from './components/cityList/CityPicker'



const App = () => {

  // const [randomCity, setRandomCity] = useState('null')

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/city">
            <CityShow />
          </Route>
          <Route path="/citypicker">
            <CityPicker />
          </Route>
          <Route path="/coolplace">
            <CoolPlace />
          </Route>
          <Route path="/warmplace">
            <WarmPlace />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </>
  ) 
}

export default App

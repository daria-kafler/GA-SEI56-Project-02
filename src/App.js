// import React, { useState } from 'react'
import 'bulma'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import WarmPlace from './components/WarmPlace'
import CoolPlace from './components/CoolPlace'



const App = () => {

  // const [randomCity, setRandomCity] = useState('null')

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/warm">
            <WarmPlace />
          </Route>
          <Route path="/cool">
            <CoolPlace />
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

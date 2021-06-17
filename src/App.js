import React from 'react'
import 'bulma'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import WarmPlace from './components/WarmPlace'
import CoolPlace from './components/CoolPlace'



const App = () => {



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
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

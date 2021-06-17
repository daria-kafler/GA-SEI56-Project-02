import React from 'react'
import 'bulma'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'



const App = () => {



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          

        </Switch>
      </BrowserRouter>
      
    </>
  ) 
}

export default App

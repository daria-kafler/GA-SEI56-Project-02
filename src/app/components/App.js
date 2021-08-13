import 'bulma'
import '../../shared/styles/main.scss'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../../home'
import Navbar from './Navbar'
import { Warm } from '../../warm'
import { Cool } from '../../cool'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/warm">
          <Warm />
        </Route>
        <Route path="/cool">
          <Cool />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter> 
  ) 
}

export default App

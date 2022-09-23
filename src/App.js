import React from 'react'
import {Route,Switch} from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Stocks from './pages/Stocks'
import Nav from './components/Nav'
import stocks from './components/stock-data'

function App() {
  return(
    <div className='App'>
    <Nav />
    <Switch>
      <Route exact path='/'><HomePage /></Route>
      <Route path='/about'><About /></Route>
      <Route
      path='/stocks/:symbol'
      render={(routerProps) =><Stocks allStocks={stocks}{...routerProps}/>}
      />
      <Route path='/stocks'><Dashboard /></Route>
    </Switch>
    </div>
  )
}

export default App;


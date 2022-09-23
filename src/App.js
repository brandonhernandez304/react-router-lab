import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage';
import StockData from './components/StockData';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import About from './components/About';

function App() {
  return(
    <div>
      <Nav />

<Switch>

<Route exact path="/">
  <Main />
</Route>
<Route path="/stocks">
  <Currencies />
</Route>
<Route path="/price/:symbol"
        render={ (routerProps)=><Price {...routerProps} /> }
>
  <Price />
</Route>

</Switch>
    </div>
  )
}

export default App;


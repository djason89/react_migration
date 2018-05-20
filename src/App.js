import React, { Component } from 'react';
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";

import Home from "./components/Home";
import Total from "./components/Total";
import Unit from "./components/Unit";
import Sync from "./components/Sync";

class App extends Component {
  render(){
      return (
        <HashRouter>
        <div>
        <h1>Migration Dashboard</h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/total">Total</NavLink></li>
          <li><NavLink to="/unit">Unit</NavLink></li>
          <li><NavLink to="/sync">Sync</NavLink></li>
        </ul>

        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/total" component={Total}/>
          <Route path="/unit" component={Unit}/>
          <Route path="/sync" component={Sync}/>
        </div>
        </div>
        </HashRouter>
      );
  }
}

export default App;

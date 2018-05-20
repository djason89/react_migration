import React from 'react';
import './Header.css';

import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

const Header = () => (
    <HashRouter>

      <h1>Migration Dashboard</h1>
      <ul className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="../Integration/integration">통합 Mig</NavLink></li>
        <li><NavLink to="../Unit/unit">unit Mig</NavLink></li>
      </ul>
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="../Integration/integration" component={Integration}/>
        <Route path="../Unit/unit" component={Unit}/>
      </div>

    </HashRouter>

)

export default Header;

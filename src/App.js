import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"


export default class App extends Component {
  render() {
    return (
<>
<Router>
<Navbar/>
<div className="container">
<Routes>
<Route exact path="/" element={<News country="in" category=""/>} />
<Route exact path="/sports" element={<News country="in" category="sports"/>} />
<Route exact path="/business" element={<News country="in" category="business"/>} />
<Route exact path="/entertainment" element={<News country="in" category="entertainment"/>} />
<Route exact path="/general" element={<News country="in" category="general"/>} />
<Route exact path="/science" element={<News country="in" category="science"/>} />
<Route exact path="/technology" element={<News country="in" category="technology"/>} />

</Routes>

</div>
</Router>


</>
     
    )
  }
}


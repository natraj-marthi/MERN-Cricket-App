import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './components/player/Player.css';
import NavBar from './components/header/Header'
import Players from './components/players/Players'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import player from './components/view-player/ViewPlayer'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar/>
        <Route  path="/" exact component={Home}/>
        <Route  path="/players" exact component={Players}/>
        <Route path="/players/:id" component={player} />
        <Footer/>
        </div>
      </Router>       
    );
  }
}

export default App;

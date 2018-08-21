import React, { Component } from 'react';
import logo from './logo.svg';
import colors from "./colors.json";
import Routing from "./components/Routing";
import {Router} from "react-router-dom";
import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props);

  //   console.log(colors);

  //   var myData = Object.keys(colors).map(key => {
  //     return colors[key];
  // })
  //   this.state={
  //     colors:Object.entries(colors),
  //   }

  //   console.log(Object.entries(colors));
  // //  console.log( Object.keys(colors)[0]);

  // //  console.log(myData);
  // }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.colors.map((item)=>(
        <div>
          {item[0]}
        </div>
        ))}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
     
        <Routing/>
    
      </div>
    );
  }
}

export default App;

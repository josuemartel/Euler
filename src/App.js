import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getInitialState() {
    return{
      problems:{
        'problem1':{
          "lblTitle": "Multiples of 3 and 5",
          "lblDescription": "If we list all natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.",
          "lblQuestion": "Find the sum of all the multiples of 3 or 5 below 1000.",
          "btnName": "Solution"
        }
      }
    }
  }
  renderEuler(key){
    return(
      <div className="column">
        <Euler key={key} index={key} details= {this.state.problems[key]} />
      </div>
    ) 
  }
  render(){
    return(
      <div className="app">
        <div className="container">
          {Object.keys(this.state.problems).map(this.renderEuler)}
        </div>
      </div>
    )
  }
}

class Euler extends Component{
  render() {
    var details = this.props.details;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Project Euler</h1>
        </header>
        <article className="problem">
          <h2 className="problem_title"> {details.lblTitle}</h2>
          <p className="problem_description">{details.lblDescription}</p>
          <p className="problem_Question">{details.lblQuestion}</p>
          <p className="problem_btn">{details.btnName}</p>
        </article>
      </div>
    );
  }
}

export default App;

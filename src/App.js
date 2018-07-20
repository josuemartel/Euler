import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="app">
        <header className="App-header">
          <h1 className="App-title">Project Euler</h1>
        </header>
        <div className="container">
          <article className="problem">
            <h2 className="problem_title">Multiples of 3 and 5</h2>
            <p className="problem_description">If we list all natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p>
            <p className="problem_Question">Find the sum of all the multiples of 3 or 5 below 1000.</p>
            <p className="problem_btn">Solution</p>
          </article>
          <article className="problem">
            <h2 className="problem_title">Power digit sum</h2>
            <p className="problem_description">215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.</p>
            <p className="problem_Question">What is the sum of the digits of the number 21000?</p>
            <p className="problem_btn">Solution</p>
          </article>
        </div>    
      </div>
    );
  }
}


export default App;

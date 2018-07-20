import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result3: 4
    };
    this.seeSolve = this.seeSolve.bind(this);
  }
  
  seeSolve() {
    this.setState({
      result3: 8 })
  }

  render(){
    return(
      <div className="app">
        <header className="App-header">
          <h1 className="App-title">Project Euler</h1>
        </header>
        <div className="container">
          <div className="column">
            <article className="problem">
              <h2 className="problem_title">Multiples of 3 and 5</h2>
              <p className="problem_description">If we list all natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p>
              <p className="problem_Question">Find the sum of all the multiples of 3 or 5 below 1000.</p>
              <p className="problem_btn" onClick={this.seeSolve}>Solve</p>
              <p className="problem_btn">{this.state.result3}</p>
            </article>
          </div>
          <div className="column">
            <article className="problem">
              <h2 className="problem_title">Power digit sum</h2>
              <p className="problem_description">215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.</p>
              <p className="problem_Question">What is the sum of the digits of the number 21000?</p>
              <p className="problem_btn">Solve</p>
            </article>
          </div>
          <div className="column">
            <article className="problem">
              <h2 className="problem_title">Multiples of 3 and 5</h2>
              <p className="problem_description">If we list all natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p>
              <p className="problem_Question">Find the sum of all the multiples of 3 or 5 below 1000.</p>
              <button  className="problem_btn" onClick={this.seeSolve}>Solve</button >
            </article>
          </div>
          <div className="columnResult">
            <article className="problem">
              <h2 className="problem_title">Power digit sum</h2>
              <p className="problem_description">215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.</p>
              <p className="problem_Question">What is the sum of the digits of the number 21000?</p>
              <p className="problem_btn">Solve</p>
            </article>
          </div>
        </div>    
      </div>
    );
  }
}


export default App;

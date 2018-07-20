import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Result1: "",
      Result3: "",
      ClassResult3: "columnNoneResult"
    };
    this.Solve = this.Solve.bind(this);
    this.PopSolution = this.PopSolution.bind(this);
    this.ShowAnswer = this.ShowAnswer.bind(this);    
  }
  
  Solve() {
    var Multiple3=0, Multiple5=0, Multiple15=0, FinalResult=0;

    for (var i = 1; i <1000; i++) {
        if((i % 3) == 0){
          Multiple3 = Multiple3 + i;
        }
        if((i % 5) == 0){
          Multiple5 = Multiple5 + i;
        }
        if((i % 15) == 0){
          Multiple15 = Multiple15 + i;
        }
    } 
    FinalResult = Multiple3 + Multiple5 - Multiple15;
    this.setState(
      {

        Result1: FinalResult 
      }
    )
  }

  PopSolution(){
    var Result2=0, a=0, b=1, c=0, sum=0;
    
    for(a=3; a<=1000; a++)
    {
      for(b=a+1; b<1000; b++){
        var c2 = Math.pow(a, 2) + Math.pow(b, 2);
        c = Math.pow(c2, 0.5);
        sum = a + b + c;
        if(sum == 1000){
          Result2 = (a*b*c);
        }
      }
    }

    {alert(Result2.toString());}
  }

  ShowAnswer(){
    var P=[2], n=3, div, i, limit, isPrime;
    while(P.length<10001){
        div=3, i=1;
        limit= Math.sqrt(n)+1;
        isPrime= true;
        while(div<limit){
            if(n%div=== 0){
                isPrime=false;
                div=limit;
            }
            else
            {
              div= P[i++] || div+ 2;
            }
        }
        if(isPrime) P.push(n);
        n+= 2;
    }
    this.setState(
      {
        Result3: P[P.length-1],
        ClassResult3: "columnResult"
      }
    )
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
              <button className="problem_btn" onClick={this.Solve}>Solve</button>
              <p className="problem_Answer1">The answer is: {this.state.Result1}</p>
            </article>
          </div>
          <div className="column">
            <article className="problem">
              <h2 className="problem_title">Special Pythagorean triplet</h2>
              <p className="problem_description">A Pythagorean triplet is a set of three natural numbers, A smaller than B smaller than C for which, a^2 + b^2 = c^2 </p>
              <p className="problem_Question">There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.</p>
              <button className="problem_btn" onClick={this.PopSolution}>Pop Solution</button>
            </article>
          </div>
          <div className="column">
            <article className="problem">
              <h2 className="problem_title">10001st prime</h2>
              <p className="problem_description">By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.</p>
              <p className="problem_Question">What is the 10 001st prime number?</p>
              <button className="problem_btn" onClick={this.ShowAnswer}>Show Answer</button >
            </article>
          </div>
          <div className="column">
            <article className={this.state.ClassResult3}>
              <h2 className="columnResult_title">The Answer is</h2>
              <p className="columnResult_result">{this.state.Result3}</p>
            </article>
          </div>
        </div>    
      </div>
    );
  }
}



export default App;

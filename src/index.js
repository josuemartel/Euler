import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var boldElement = <b>Text (as a string)</b>;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

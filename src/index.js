import React from 'react';
import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};
 
// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <Route path="/" render={Home} />
  </Router>),
  document.getElementById('root')
);

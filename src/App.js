import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import BCard from './Components/Card';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar/>
        </div>
        <div>
          <BCard/>
        </div>
        
      </Router>
    )
  }
   
}

export default App;

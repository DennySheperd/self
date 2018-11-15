import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

class App extends Component {


    constructor(){

        super()

        axios.get('api/hello')
        .then(response => console.log(response.data))

    }



  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;

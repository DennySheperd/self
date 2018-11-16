import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { sendMessage } from './actions/messages'
import './App.css';

const mapDispatchToProps = {
  sendMessage,
 };

class App extends Component {

    constructor(){

        super()

        axios.get('api/hello')
        .then(response => console.log(response.data))
    }

    test(){
      console.log(sendMessage('sdssdds'))
    }

  render() {

    return (
      <div className="App">
          <button onClick = { this.sss }>Press</button>
      </div>
    );
  }
}


export default connect(null, mapDispatchToProps)(App);

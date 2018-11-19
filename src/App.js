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

        this.state = {
          title:''
        }

        axios.get('api/hello')
        .then(response => console.log(response.data))
    }

    test = () => {
      console.log(sendMessage(this.state.title))
    }

  render() {
    return (
      <div className="App">
          <input type="text" value={this.title}/>
          <button onClick = { this.test }>Press</button>
      </div>
    );
  }
}


export default connect(null, mapDispatchToProps)(App);

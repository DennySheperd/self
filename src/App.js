import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { sendMessage } from './actions/messages'
import './App.css';

import login from './components/auth/login'
import register from './components/auth/register'
import home from './components/home'
import Header from './components/header'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
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
        <Router>
          <div className="App">
            <Header/>
            <div className="container">
  
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/login" component={login} />
              <Route path="/register" component={register} />
            </Switch>
  
  
            </div>
          </div>
        </Router>
      );
  }
}


export default connect(null, mapDispatchToProps)(App);

import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

export default class header extends Component {

  render() {
    return (
        <div >
        <div>
        <AppBar position="static">
            <Toolbar>
                React Material UI Example
            </Toolbar>
        </AppBar>
        </div>
      </div>
    )
  }
}

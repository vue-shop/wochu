import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import './App.css'
class App extends Component {
  componentWillMount(){

  }
  render() {
    return (
      <div>
        App
        {this.props.children}
        <Navbar />
      </div>
    )
  }
}

export default App
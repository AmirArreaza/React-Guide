import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I'm a React App</h1>

        <Person name="Amir" age="20"/>
        <Person name="Amir" age="25">Ta Loco!</Person>
        <Person name="Amir" age="30"/>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Amir', age: 28},
      { name: 'Max', age: 30},
      { name: 'Manu', age: 21}
    ],
    otherState: 'Otro'
  };

  switchNameHandler = (newName) => {
    //console.log('Alive');
    //Don't Use this: this.state.persons[0].name = 'Test';
    this.setState({persons: [
      { name: newName, age: 28},
      { name: 'Max', age: 900},
      { name: 'Manu', age: 21}
      ],
      otherState: 'Otro'
    })
  };

  render(){
  return (
    <div className="App">
      <h1>Hello, I'm a React App</h1>
      <button onClick={() => this.switchNameHandler('ErGue')}>Switch Name</button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'AmirArreaza')}>Ta Loco!</Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
    </div>
    );
  }

}

export default App;
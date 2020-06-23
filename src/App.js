import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'P1', name: 'Amir', age: 28 },
      { id: 'P2', name: 'Max', age: 30 },
      { id: 'P3', name: 'Manu', age: 21 }
    ],
    otherState: 'Otro'
  };
/*
  switchNameHandler = (newName) => {
    //Don't Use this: this.state.persons[0].name = 'Test';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Max', age: 900 },
        { name: 'Manu', age: 21 }
      ],
      otherState: 'Otro'
    })
  };
*/

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { id: 'P1', name: 'Max', age: 28 },
        { id: 'P2', name: event.target.value, age: 90 },
        { id: 'P3', name: 'Manu', age: 21 }
      ],
      otherState: 'Otro',
      showPersons: false
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                name={person.name} 
                age={person.age} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello, I'm a React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}
      </div>
    );
  }

}

export default App;
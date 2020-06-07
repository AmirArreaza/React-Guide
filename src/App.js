import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Amir', age: 28},
      { name: 'Max', age: 30},
      { name: 'Manu', age: 21}
    ],
    otherState: 'Otro'
  });

  const[otherState, setOtherState] = useState('Otro Mas');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Alive');
    //Don't Use this: this.state.persons[0].name = 'Test';
    setPersonsState({persons: [
      { name: 'AmirDos', age: 28},
      { name: 'Max', age: 900},
      { name: 'Manu', age: 21}
      ],
      otherState: 'Otro'
    })
  };

  return (
    <div className="App">
      <h1>Hello, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Ta Loco!</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;
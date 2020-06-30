import React from 'react';
import classes from './Person.css';

const person = (props) => {

    const rnd = Math.random();

    if( rnd > 0.7 ){
        throw new Error('Random number more than 0.7 -> ' + rnd);
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Soy {props.name} y tengo {props.age} años!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;
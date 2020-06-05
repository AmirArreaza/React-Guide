import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Soy {props.name} y tengo {props.age} años!</p>
            <p>{props.children}</p>
        </div>
    )    
}

export default person;
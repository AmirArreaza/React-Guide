import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] redering...");
    /*
    const rnd = Math.random();

    if( rnd > 0.7 ){
        throw new Error('Random number more than 0.7 -> ' + rnd);
    }
    */
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          Soy {this.props.name} y tengo {this.props.age} años!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;

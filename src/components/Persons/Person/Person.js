import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    //this.inputelement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] redering...");
    /*
    const rnd = Math.random();

    if( rnd > 0.7 ){
        throw new Error('Random number more than 0.7 -> ' + rnd);
    }
    */
    return (
      // React.Fragment does the same as the HighOrderComponent Auxiliary component
      <Auxiliary>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please Log in!</p>
        )}
        <p onClick={this.props.click}>
          Soy {this.props.name} y tengo {this.props.age} años!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          //ref={(inputEl) => {this.inputelement = inputEl}}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);

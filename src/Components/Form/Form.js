import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <form className="form">
        <label htmlFor="name-input">Name:</label>
        <input type="text" className="input" id="name-input"></input>

        <label htmlFor="month-input">Month:</label>
        <input type="text" className="input" id="month-input"></input>

        <label htmlFor="day-input">Day:</label>
        <input type="text" className="input" id="day-input"></input>

        <button>Add this birthday!</button>
      </form>
    )
  }
}

export default Form;
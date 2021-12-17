import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      monthInput: '',
      dayInput: ''
    }
  }

  setName(e) {
    this.setState({ nameInput: e.target.value })
  }

  setMonth(e) {
    this.setState({ monthInput: e.target.value })
  }

  setDay(e) {
    this.setState({ dayInput: e.target.value })
  }

  createNewBday(e) {
    e.preventDefault();
    let newBday = {id: Date.now(), name: this.state.nameInput, month: parseInt(this.state.monthInput), day: parseInt(this.state.dayInput)}
    this.props.handleChange(newBday)
    this.setState({ nameInput: '', monthInput: '', dayInput: '' })
  }

  render() {
    return (
      <form className="form">
        <label htmlFor="name-input">Name:</label>
        <input type="text" className="input" id="name-input" onChange={(e) => this.setName(e)}></input>

        <label htmlFor="month-input">Month:</label>
        <input type="text" className="input" id="month-input" onChange={(e) => this.setMonth(e)}></input>

        <label htmlFor="day-input">Day:</label>
        <input type="text" className="input" id="day-input" onChange={(e) => this.setDay(e)}></input>

        <button type="submit" onClick={(e) => this.createNewBday(e)}>Add this birthday!</button>
      </form>
    )
  }
}

export default Form;
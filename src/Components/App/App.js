import React, { Component } from 'react';
import './App.css';
import Month from '../Month/Month';
// import fetchBirthdays from './fetchCalls.js';
import Form from '../Form/Form';
import { months } from '../../months_data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      months: months, 
      allBirthdays: [], 
      newBirthday: ''
    }
  }

  handleChange(name, month, day) {
    this.setState({ newBirthday: {id: Date.now(), name: name, month: parseInt(month), day: parseInt(day)} })
  //   fetch('POST', 'http://localhost:3001/api/v1/birthdays')
  //   .then(response => response.json())
  }

  componentDidMount () {
      fetch('http://localhost:3001/api/v1/birthdays')
      .then(response => response.json())
      .then(data =>
       this.setState({ allBirthdays: data.map(each => each) }))
  }

  populateMonths() {
    return this.state.months.map((month) => {
      const birthdays = this.state.allBirthdays.filter(birthday => birthday.month === month.id);
      return <Month name={month.name} id={month.id} key={month.id} birthdays={birthdays}/>
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Birthdays</h1>
        <div className='bday-form'>
          <Form handleChange={this.handleChange}/>
        </div>
        <div className='bday-container'>
          {this.populateMonths()}
        </div>
      </div>
    );
  }
}


export default App;

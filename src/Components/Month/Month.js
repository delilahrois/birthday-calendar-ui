import React from 'react';
import { months } from '../../months_data';
import './Month.css';

const Month = (props) => {

  // const allMonths = months.map((month) => {
  //   return month.name
  // })

  return (
    <div className="month-card">
      <h2>{allMonths}</h2>
      <p></p>
    </div>
  )
}

export default Month;
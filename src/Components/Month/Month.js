import React from 'react';
// import { months } from '../../months_data';
import './Month.css';

const Month = ({name, id, key, birthdays}) => {
  

  // const allMonths = months.map((month) => {
  //   return month.name
  // })

const findBirthdays =
  birthdays.map((each) => {
    return (
      <p>{each.name}: {each.month}/{each.day}</p>
    )
  })

    return (
      <div className="month-card">
        <h2 className="month-header">{name}</h2>
        {findBirthdays}
      </div>
    )
}

export default Month;
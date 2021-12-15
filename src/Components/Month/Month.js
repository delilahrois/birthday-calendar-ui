import React from 'react';
import './Month.css';

const Month = ({name, birthdays}) => {

  const findBirthdays =
    birthdays.map((each) => {
      return (
        <p>{each.name}: {each.month}/{each.day}</p>
      )
    })

    return (
      <div className="month-card">
        <h2 className="month-header">{name}</h2>
        {!birthdays.length && <p className="no-bdays">No birthdays this month.</p>}
        {findBirthdays}
      </div>
    )
}

export default Month;
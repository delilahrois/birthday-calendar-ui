import './App.css';
import Month from '../Month/Month';
import { months } from '../../months_data';

function App() {

  return (
    <div className="App">
      <h1>Birthdays</h1>
      <div className='bday-form'>

      </div>
      <div className='bday-container'>
        <Month />
      </div>
    </div>
  );
}

export default App;

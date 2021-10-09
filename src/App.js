import React from 'react';
import './App.css';
import BmiCalculator from './components/BMI';

const App = () => {
  return (
    <div className="App">
      <div className='row justify-content-center'>
        <div className='col-lg-6 col-lg-offset-3'>
          <h1 style={{color: 'white', textAlign: 'center'}}>BMI Calculator React Hooks app</h1>
          <BmiCalculator />
        </div>
      </div>
    </div>
  );
}

export default App;
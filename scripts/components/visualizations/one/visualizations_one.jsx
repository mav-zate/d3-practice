import React from 'react';
import InputForm from './input_form';
import Histogram from './histogram';

class VisualizationsOne extends React.Component {
  constructor() {

  }

  
  render() {
    return (
      <div>
        <InputForm />
        <Histogram />
      </div>
    );
  }
}

export default VisualizationsOne;

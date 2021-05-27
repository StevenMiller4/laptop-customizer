import React, { Component } from 'react';
import './App.css';

import MainForm from './MainForm/MainForm';
import Summary from './Summary/Summary';
import Total from './Total/Total';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    let total = 0;
    for (let i = 0; i < this.state.selected.length; i++) {
      total = total + this.state.selected[i].cost;
    }

    return (
      <div className="App">
          <MainForm 
            features = {this.props.features}
            handleUpdate={(feature, newValue)=>this.updateFeature((feature, newValue))}
          />
          <Summary 
            selected = {this.state.selected}
          />
          <Total 
            total = {total}
          />
      </div>
    );
  }
}

export default App;
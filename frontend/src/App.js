import React, { Component } from 'react';

import Wheel from './wheel';
import './styles.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1",
      color: '' ,

      red: 0,
      Green: 0,
      Blue: 0,
      orange: 0,
      purple: 0,
      
      colors: [],
    };    
    // this.places = ['Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Japanese food', 'Pastas'];

    this.onRadioChange = this.onRadioChange.bind(this);

  }

  onRadioChange = (e) => {
    return this.setState({
        colors: [...this.state.colors, e.target.value]
    });
  }


  render() {
    return (
      <div className="App">
        <h1 className="verticalSpacer">Climbing Twister</h1>
        <p className="verticalSpacer">Choose what color holds you have</p>

          <strong>Select Colors</strong>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="red"
                  checked={this.state.red === 1}
                  onChange={this.onRadioChange}
                />
                <span>Red</span>
              </label>
            </li>
          </ul>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="green"
                  checked={this.state.green === 1}
                  onChange={this.onRadioChange}
                />
                <span>Green</span>
              </label>
            </li>
          </ul>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="blue"
                  checked={this.state.blue === 1}
                  onChange={this.onRadioChange}
                />
                <span>Blue</span>
              </label>
            </li>
          </ul>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="orange"
                  checked={this.state.orange === 1}
                  onChange={this.onRadioChange}
                />
                <span>Orange</span>
              </label>
            </li>
          </ul>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="purple"
                  checked={this.state.purple === 1}
                  onChange={this.onRadioChange}
                />
                <span>Purple</span>
              </label>
            </li>
          </ul>

        <Wheel items={this.state.colors} />


      </div>
    );
  }
}

export default App;
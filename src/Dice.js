import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        {this.props.dice.map((d, idx) => (
          <Die
            handleClick={this.props.handleClick}
            val={d}
            locked={this.props.locked[idx]}
            idx={idx}
            key={idx}
          />
        ))}
      </div>
    );
  }
}

Dice.defaultProps = {
  //dice: Array.from({ length: 5 }, () => Math.ceil(Math.random() * 6))
  dice: [1, 2, 3, 4, 5]
};

export default Dice;

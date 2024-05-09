import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  Add = () => {
    this.setState({ count: this.state.count + 1 });
  };

  Subtract = () => {
    this.setState({ count: this.state.count - 1 });
  };
  Reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (     
      <div>
        <div>
        <h1>{this.state.count}</h1>
        </div>
        <div className='flexbox'>
          <button className='card' onClick={this.Add}>+</button>
          <button className='card' onClick={this.Subtract}>-</button>
          <button className='card' onClick={this.Reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
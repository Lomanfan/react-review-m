import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    console.log("counter", counter);
    const counters = [...this.state.counters];
    counter[0] = {...counter};
    // counter[0].value++;
    console.log(this.state.counters[0]);

  };

  handleDelete = (counterId) => {
    // console.log('HandleDelete Called, id', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0; 
      return c;
    });
    this.setState({counters: counters});
  }

  render() {
    return (
      <div>
        <button 
        onClick={this.handleReset}
        className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map((counter) => (<Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter} selected={true}/>))}
      </div>
    );
  }
}

export default Counters;

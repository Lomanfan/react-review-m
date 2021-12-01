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

  handleDelete = (counterId) => {
    // console.log('HandleDelete Called, id', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: counters});
  }


  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (<Counter key={counter.id} onDelete={this.handleDelete} counter={counter} selected={true}/>))}
      </div>
    );
  }
}

export default Counters;

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {


  render() {
    const {onReset, counters, onDelete, onIncrement} = this.props;

    return (
      <div>
        <button 
        onClick={onReset}
        className="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map((counter) => (<Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter} selected={true}/>))}
      </div>
    );
  }
}

export default Counters;

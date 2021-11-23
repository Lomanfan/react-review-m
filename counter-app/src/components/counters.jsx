import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Counters;

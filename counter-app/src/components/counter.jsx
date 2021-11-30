import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('props', this.props);

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>  {/*Instead of rendering {this.state.count}, we call function {this.formatCount()} , destructure {count} out of this.state to further reduce repetitive code; and render "Zero" or count conditionally*/}
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-primary btn-sm"
        >
          +
        </button>
        <ul>
          {/* {this.state.tags.map((tag) => <li key={tag}>{tag}</li>)} */}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

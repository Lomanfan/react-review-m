import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>{" "}
        {/*Instead of rendering {this.state.count}, we call function {this.formatCount()} , destructure {count} out of this.state to further reduce repetitive code; and render "Zero" or count conditionally*/}
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-primary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          -
        </button>
        <ul>
          {/* {this.state.tags.map((tag) => <li key={tag}>{tag}</li>)} */}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

import React, { Component } from "react";

class Counter extends React.Component {
  render() {
    // console.log("props", this.props);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            {/*Instead of rendering {this.state.count}, we call function {this.formatCount()} , destructure {count} out of this.state to further reduce repetitive code; and render "Zero" or count conditionally*/}
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-primary btn-sm ml-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-primary btn-sm m-2"
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
          <ul>
            {/* {this.state.tags.map((tag) => <li key={tag}>{tag}</li>)} */}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

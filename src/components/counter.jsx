import React, { Component } from "react";

class Counter extends Component {
  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold",
  // };
  // badgeColor = "badge-primary";

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    }

    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
          // all list must have keys so that the DOM can identify all elements of the array once there is a change
        ))}
      </ul>
    );
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // using arrow functions allows the method to inherit the "this". this stops you from creating a custom constructor like the one above

  render() {
    console.log("props:", this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatevalue()}</span>
        {/* curly braces allow for the use of javascript, so plain javascrip like a funtion can be put in between the braces */}
        <button
          onClick={() => {
            this.props.onIncrement();
          }}
          className="btn btn-secondary button-small"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger button-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatevalue() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

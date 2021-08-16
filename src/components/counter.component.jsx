import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0
  };

  formatCount = () => {
    if (this.state.counter === 0) return "Zero";
    else return this.state.counter;
  };

  

  render() {
    return (
      <>
        
        
            <div>
              <span class="badge bg-primary">{this.props.value}</span>
              <button onClick= {() => this.props.onIncrement(this.props.id)} type="button" class="btn btn-secondary m-2">
                +
              </button>
              <button onClick= {() => this.props.onDecrement(this.props.id)} type="button" class="btn btn-secondary m-2">
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          
      </>
    );
  }
}

export default Counter;


/**<nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar <span class="badge bg-secondary">4</span>
            </a>
          </div>
        </nav>
        <button type="button" class="btn btn-primary m-4">
          Reset
        </button> */
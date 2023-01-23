import React, { Component } from 'react'

export default class Ccomp extends Component {
    constructor(props) {
      super(props)
      this.state = {
         count:0,
      }
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }

    increment(){
        this.setState(state=>({
            count:state.count + 1,
        }));
    }
    decrement(){
        this.setState(state=>({
            count:state.count - 1,
        }));
    }
    reset(){
        this.setState({
            count:0,
        });
    }

  render() {
        return (
            <div>
              <h1>{this.state.count}</h1>
              <button onClick={this.increment}>COUNT+++</button>
              <button onClick={this.decrement}>COUNT---</button>
              <button onClick={this.reset}>RESET COUNT</button>
            </div>
          )
  }
}

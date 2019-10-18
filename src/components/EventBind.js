import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello"
    };

    //for the approach #3 of event binding
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler(){
  //     console.log(this)
  //     this.setState({
  //         message : 'Goodbye'
  //     })
  // }

  //for the approach #4 of event binding
  clickHandler = () => {
    this.setState({
      message: "Goodbye"
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()} >Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;

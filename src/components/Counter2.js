import React, { Component } from "react";

class Counter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
        <div>
            {/* ==================Passing Functionality Using RENDERING PROPS================== */}
            {this.props.render(this.state.count, this.incrementCount)}
        </div>
        // <div>
        //     {/* ==================Passing Functionality As Children================== */}
        //     {this.props.children(this.state.count, this.incrementCount)}
        // </div>
    );
  }
}

export default Counter2;

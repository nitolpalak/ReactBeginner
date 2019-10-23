import React from "react";

//Following are the naming convention of HOC(Higher Order Component)
//Can also pass parameters loke increment number
//Need to pass props like {...this.props} to pass all the props and access a prop attribute from HOC childs like ClickCounter.js in this case
//Need to pass prop like this because we are passing component like HOC(OriginalComp) from HOC childs and prop in wrapped in HOC
const withCounter = (WrappedComponent, incrementNumb) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementNumb };
      });
    };

    render() {
      console.log(this.props.name);
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

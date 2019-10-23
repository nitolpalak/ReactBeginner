import React, { Component } from "react";
import CompF from "./CompF";
import UserContext, { UserConsumer } from "./userContext";

class CompE extends Component {
    //2nd method CAN'T BE USED other than CLASS COMPS and can be subscribe to single context
    //If application supports, then can be used for 2nd method alternatively
  static contextType = UserContext;

  render() {
    return (
      // For 2nd method of context
      <div>
        Component E context {this.context}
        <CompF />
      </div>
    );
  }
}

// CompE.contextType = UserContext; // For 2nd method of context

export default CompE;

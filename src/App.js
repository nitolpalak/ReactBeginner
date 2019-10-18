import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name="Master Yi" origin="Assasin" />
                <p> Alpha Strike! </p>
                <Greet name="Tryndamere" origin="Viking" />
                <p> Undying Rage! </p>
                <Greet name="Yasuo" origin="Samurai" />
                <p> Hasaki! </p> */}
        {/* <Welcome name="Zed" origin="Assasin" />
                <Welcome name="Garen" origin="Demacia" />
                <Welcome name="Darius" origin="Knight" />
                <Hello /> */}
        {/* <Counter /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        <NameList />
      </div>
    );
  }
}

export default App;

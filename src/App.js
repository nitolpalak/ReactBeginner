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
import StyleSheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import Form from "./components/Form"
import './appStyles.css'
import styles from "./appStyles.module.css"
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RefsDemo />
        {/* <ParentComp /> */}
        {/* <PureComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Succeess</h1> */}
        {/* <Inline /> */}
        {/* <StyleSheet primary={false}/> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <Counter /> */}
        {/* <Welcome name="Zed" origin="Assasin" />
                <Welcome name="Garen" origin="Demacia" />
                <Welcome name="Darius" origin="Knight" />
                <Hello /> */}
        {/* <Greet name="Master Yi" origin="Assasin" />
                <p> Alpha Strike! </p>
                <Greet name="Tryndamere" origin="Viking" />
                <p> Undying Rage! </p>
                <Greet name="Yasuo" origin="Samurai" />
                <p> Hasaki! </p> */}
      </div>
    );
  }
}

export default App;

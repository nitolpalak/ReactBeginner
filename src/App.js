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
import Form from "./components/Form";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounter2 from "./components/ClickCounter2";
import HoverCounter2 from "./components/HoverCounter2";
import User from "./components/User";
import Counter2 from "./components/Counter2";
import CompC from "./components/CompC";
import { UserProvider } from "./components/userContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <===========================Context===========================> */}
        <UserProvider value='Yi'>
          <CompC />
        </UserProvider>

        {/* ==================Passing Functionality As Children================== */}
        {/* <Counter2>
          {(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )}
          </Counter2>
          <Counter2>
          {(count, incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )}
          </Counter2> */}

        {/* ==================Passing Functionality Using RENDERING PROPS================== */}
        {/* <Counter2
          render={(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter2
          render={(count, incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )}
        /> */}

        {/* ==================Passing functionality Using HOC================== */}
        {/* <ClickCounter2 />
        <HoverCounter2 />
        <User render={isLoggedIn => (isLoggedIn ? "Yi" : "Guest")} /> */}
        {/* <ClickCounter name="Yi" />
        <HoverCounter /> */}
        {/* <ErrorBoundary>
          <Hero heroname="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroname="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroname="Joker" />
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
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

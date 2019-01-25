import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./project/AddProject";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <br />
            <Header />
            <br />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

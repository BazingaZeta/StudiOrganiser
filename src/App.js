import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Kanbanboard from "./components/Kanbanboard";
import Managers from "./components/Managers/Managers";
import TasksForm from "../src/components/Tasks/TasksForm";
import TaskTypes from "./components/TaskTypes/TaskTypes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li className="box">
              <Link to="/">Home</Link>
            </li>
            <li className="box">
              <Link to="/addTask">Add Task</Link>
            </li>
            <li className="box">
              <Link to="/taskTypes">Task Types</Link>
            </li>
            <li className="box">
              <Link to="/managers">Managers</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/taskTypes" component={TaskTypes} />
        <Route path="/managers" component={Managers} />
        <Route path="/addTask" component={TasksForm} />
        <Route path="/" component={Kanbanboard} />
      </Switch>
    </Router>
  );
}

export default App;

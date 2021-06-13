import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todos from "./todos/Todos";
import Users from "./users/Users";

class Navs extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-sm bg-light justify-content">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/todos/">
                  Todos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users/">
                  Users
                </Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Todos} />
          <Route path="/todos/" component={Todos} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }
}

export default Navs;

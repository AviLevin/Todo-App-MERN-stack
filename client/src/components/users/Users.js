import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import axios from "axios";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/users")
      .then(
        function(response) {
          console.log(response.data);

          this.setState({ users: response.data });
        }.bind(this)
      )
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  onDelete = e => {
    e.preventDefault();
    console.log(e.target.id);

    let postId = e.target.id;
    axios
      .delete(`http://localhost:3000/api/${postId}`, {
        body: { id: postId }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  onEdit = e => {
    e.preventDefault();
    console.log(e.target.getAttribute("data-id"));
  };
  render() {
    let allUsers = this.state.users.map(user => (
      <React.Fragment>
        <div className="card mt-2">
          <div className="card-body">
            <h3>User # {user.id}</h3>
            <h4 className="card-title bg-light">{user.name}</h4>
            <p className="card-text">{user.password}</p>

            {/* <a href="/" className="card-link">
              </a>
            <button
              className="btn btn-warning"
              onClick={this.onEdit}
              data-id={user.id}
            >
              Edit post
            </button>

            <button
              className="btn btn-danger"
              onClick={this.onDelete}
              id={todo.id}
            >
              Delete post
            </button> */}
          </div>
        </div>
      </React.Fragment>
    ));

    return allUsers;
  }
}

export default Users;

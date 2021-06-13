import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/todos")
      .then(
        function(response) {
          console.log(response.data);

          this.setState({ todos: response.data });
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
    let allTodos = this.state.todos.map(todo => (
      <React.Fragment>
        <div className="card mt-2">
          <div className="card-body">
            <h3>Todo # {todo.id}</h3>
            <h4 className="card-title bg-light">{todo.title}</h4>
            <p className="card-text">{todo.body}</p>

            {/* <a href="/" className="card-link">
              </a>
            <button
              className="btn btn-warning"
              onClick={this.onEdit}
              data-id={todo.id}
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
        <Accordion defaultActiveKey="1">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Read more...
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {todo.name} | {todo.email}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </React.Fragment>
    ));

    return allTodos;
  }
}

export default Todos;

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todos_db"
});

class TodoController {
  static getAllTodo(req, res) {
    // connection.query("SELECT * FROM todos", function(err, rows, fields) {
    // connection.query(
    //   "SELECT * FROM todos INNER JOIN users ON todos.user_id = users.id",
    connection.query(
      "SELECT todos.id, todos.title, todos.body, users.name, users.email FROM todos INNER JOIN users ON todos.user_id = users.id",

      function(err, rows, fields) {
        if (err) throw err;
        console.log("The solution is: ", rows);
        res.send(rows);
      }
    );
  }
  //GET SINGLE TODO
  static getSingleTodo(req, res) {
    var id = req.params.id;

    connection.query(`SELECT * FROM todos WHERE id=${id}`, function(
      err,
      rows,
      fields
    ) {
      if (err) throw err;
      console.log("The solution is: ", rows[0]);
      res.send(rows[0]);
    });
  }
}

module.exports = TodoController;

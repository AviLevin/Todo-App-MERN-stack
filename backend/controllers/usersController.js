var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "378378",
  database: "todos_db"
});
class UsersController {
  // GET ALL USERS
  static getAllUsers(req, res) {
    connection.query("SELECT * FROM users", function(err, rows, fields) {
      if (err) throw err;
      console.log("The solution is: ", rows);
      res.send(rows);
    });
  }
  //GET SINGLE USER
  static getSingleUser(req, res) {
    var id = req.params.id;

    connection.query(`SELECT * FROM users WHERE id=${id}`, function(
      err,
      rows,
      fields
    ) {
      if (err) throw err;
      console.log("The solution is: ", rows[0]);
      res.send(rows[0]);
    });
  }

  //POST NEW USER
  static addNewUser(req, res) {
    var sql = `INSERT INTO users (name, password, email) VALUES ('${
      req.params.userName
    }', '${req.params.userPwd}', '${req.params.userEmail}')`;

    // console.log(sql);

    connection.query(sql, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  }
}
module.exports = UsersController;

var express = require("express");
var router = express.Router();
var TodoController = require("../controllers/todoController");

/* GET All todos. */
router.get("/", TodoController.getAllTodo);
/* GET Single todos. */

router.get("/:id", TodoController.getSingleTodo);

module.exports = router;

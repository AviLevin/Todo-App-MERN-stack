var express = require("express");
var router = express.Router();
var UsersController = require("../controllers/usersController");

/* GET All users */
router.get("/", UsersController.getAllUsers);

/* GET Single users */

router.get("/:id", UsersController.getSingleUser);

/* POST New user */

router.post("/new", UsersController.addNewUser);

module.exports = router;

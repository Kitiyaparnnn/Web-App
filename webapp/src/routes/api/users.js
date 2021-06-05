const express = require("express");
const router = express.Router();
const users = require("../../Users");
const uuid = require("uuid");

//Get all users
router.get("/", (req, res) => {
  res.json(users);
});

//Get single user
router.get("/:id", (req, res) => {
  const existUser = users.some((user) => user.id === +req.params.id);
  if (!existUser) {
    res
      .status(400)
      .json({ message: `No user with the id of ${req.params.id}` });
  }
  res.json(users.filter((user) => user.id === +req.params.id));
});

//Create users
router.post("/", (req, res) => {
  const newuser = {
    id: uuid.v4(),
    status: req.body.status,
    name: req.body.name,
    address: req.body.address,
    picture: req.body.picture,
    package: req.body.package,
  };
  if (!newuser.picture) {
    return res.status(400).json({ message: "This user is rejected." });
  }

  users.push(newuser);
  res.redirect('/');
});

//Update user
router.put("/:id", (req, res) => {
  const existUser = users.some((user) => user.id === +req.params.id);
  if (existUser) {
    const updUser = req.body;
    users.forEach((user) => {
      if (user.id === +req.params.id) {
        user.status = updUser.status ? updUser.status : user.status;
        user.name = updUser.name ? updUser.name : user.name;
        user.address = updUser.address ? updUser.address : user.address;
        user.picture = updUser.picture ? updUser.picture : user.picture;
        user.package = updUser.package ? updUser.package : user.package;
        res.json({ message: "User updated", user });
      }
    });
  } else {
    res
      .status(400)
      .json({ message: `No user with the id of ${req.params.id}` });
  }
});

//Delete users
router.delete("/:id", (req, res) => {
  const existUser = users.some((user) => user.id === +req.params.id);

  if (existUser) {
    res.json({
      message: "User is deleted.",
      users: users.filter((user) => user.id !== +req.params.id),
    });
  } else {
    res
      .status(400)
      .json({ message: `No user with the id of ${req.params.id}` });
  }
});

module.exports = router;

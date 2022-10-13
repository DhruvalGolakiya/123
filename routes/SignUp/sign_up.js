const express = require("express");
const router = express.Router();
const userModel = require("../../model/data_model");

router.post("/",  async (req, res, next) => {
  const newUser = new userModel({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Username: req.body.Username,
    Password: req.body.Password,
    Age: req.body.Age,
  });
  await newUser.save();
  res.send(newUser);
});


router.get("/", async (req, res) => {
    const users = await userModel.find();
    res.send(users);
  });

module.exports = router;

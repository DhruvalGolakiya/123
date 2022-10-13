const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const data = require("../../model/data_model");

router.get("/", async (req, res) => {
  const users = await data.find();
  res.send(users);
});

router.delete("/:id", async (req, res) => {
	const users = await data.findByIdAndRemove(req.params.id)
	res.send(users)
})


router.post("/", async (req, res) => {
  const newUser = new data({
    name: req.body.name,
    age: req.body.age,
    _id:req.body._id,

  });
  await newUser.save();
  res.send(newUser);
});
module.exports = router;

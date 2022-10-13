const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const data = require("../../model/data_model");

router.get("/", async (req, res) => {
  const users = await data.find();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const user = await data.findById(req.params.id);
  res.send(user);
});

router.delete("/:id", async (req, res) => {
  const user = await data.findByIdAndRemove(req.params.id);
  res.send(user);
});

router.post("/", async (req, res) => {
  const newUser = new data({
    name: req.body.name,
    age: req.body.age,
  });
  await newUser.save();
  res.send(newUser);
});


router.patch("/", async (req,res)=>{
  
})
module.exports = router;

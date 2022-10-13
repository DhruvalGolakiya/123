const express = require("express");
const router = express.Router();
const userModel = require("../../model/data_model");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");

router.post("/", (req, res, next) => {
  userModel
    .findOne({
      Username: req.body.Username,
    })
    .lean()
    .exec((err, user) => {
      if (!user) {
        res.status(400).send({ message: "not exist" });
      }
      if (user) {
        console.log(user);
        // res.status(200).send({ message: "LoggedIn" });
        const token = jwt.sign({ id: user._id }, "dhruval", {
          expiresIn: "20000s",
        });
        res.send(token);

   
        // try {
        //   const decodeToken = jwt.verify(token, "dhruval");
    
        // } catch {
        //   res.status(401).send("Invalid Token");
        // }
      }
    });
});

router.get("/auth", (req,res)=>{
    const token = req.body.token
    
   if(token){
    const decodeToken = jwt.verify(token, "dhruval");
   }
   res.send("Logged IN")
})

// const verifyToken = (req, res, next) => {
//   const token =
//     req.params.token;

//   if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }
//   try {
//     const decoded = jwt.verify(token, 'dhruval');
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }
//   return next();
// };

router.get("/loggedIN", (req,res,next)=>{
    req.send('LOGGED IN')
})
module.exports = router;

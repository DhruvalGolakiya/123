const { json } = require("express");
const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path");

// fs.readFile(path.join(__dirname, "./name.json"), "utf8", (err, jsonString) => {
//   if (err) {
//     console.log("File read failed:", err);
//     return;
//   }
//   console.log("File data:", jsonString);
// });

// router.get("/", (req, res) => {
//   console.log(jsonData);
//   res.json(jsonData);
// });

// router.delete("/:id", (req, res)  => {
//   let id = req.params.id;
//   let index;
//   for (let i = 0; i <= jsonData.length - 1; i++) {
//     if (id == jsonData[i].id) {
//       index = i;
//       jsonData.splice(index, 1);

//       break;
//     }
//   }

//   res.send(jsonData);
// });

// router.patch("/:id", (req, res) => {
//   let id = req.params.id;
//   let name = req.body.name;

//   let i = jsonData.findIndex((user) => user.id == id);

//   jsonData[i].name = name;

//   res.send(jsonData);
// });

router.get("/", (res, req) => {
  fs.readFile(path.join(__dirname, "./name.json"), "utf8", (err, data) => {
    if (err) {
      throw err;
      return;
    }
    console.log(data);
    req.send(data);
  });
});

var obj = {
  users: [],
};

router.post("/", (res, req) => {
  fs.readFile(path.join(__dirname, "./name.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data); //now it an object
      obj.users.push({ id: new Date().getTime(), name: res.body.name }); 
      req.json(obj)
      const Json = JSON.stringify(obj, null, 2); //convert it back to json
      fs.writeFile(path.join(__dirname, "./name.json"), Json, "utf8", (err) => {
        if (err) {
          console.log(err);
        }
      }); // 

    
    }
  });
});

// console.log(data);
// res.json(jsonData)

// var json = JSON.parse(data);s
// json.push({ id: new Date().getTime(), ...req.body });
// fs.writeFile(path.join('__dirname' , '../../files/1.json'), JSON.stringify(json));
// console.log("DATAA",+data);

//   jsonData.({ id: new Dae().getTime(), ...req.body });
//   tres.json(jsonData);

// router.get("/filter", (req, res) => {
//   let voters = jsonData.filter((user) => user.age > 18);
//   res.json(voters);
// })

module.exports = router;

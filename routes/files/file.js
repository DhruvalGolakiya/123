const { json } = require("express");
const express = require("express");
const fs = require("fs");
const { parse } = require("path");
const router = express.Router();
const path = require("path");

// router.get("/", (req, res) => {
//   fs.readFile(path.join(__dirname, "../../test.js"), (err, data) => {
//     res.send(JSON.parse(data))
//   });
// });

// router.post("/", (req, res) => {
//   let newUser = {
//     name: req.body.name,
//     // id: req.body.id,// new date object
//   };
//   fs.writeFile(
//     path.join(__dirname, "../../test2.json"),
//     JSON.stringify(newUser),
//     (err) => {
//       res.send("ok");
//     }
//   );
// });

// router.get("/", (req, res) => {
//     res.json(userData)
// });
// fs.writeFile(
//       path.join(__dirname, "../../test2.json"),
//    JSON.stringify(newUser),
//     (err) => {
//       res.send("ok");
//         }
//     );
const jsonData = [];
router.get("/", (req, res) => {
  res.json(jsonData);
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  let index;
  for (let i = 0; i <= jsonData.length - 1; i++) {
    if (id == jsonData[i].id) {
      index = i;
      jsonData.splice(index, 1);
      // console.log("v". + v);
      break;
    }
  }

  res.send(jsonData);
});

router.patch("/:id", (req, res) => {
  let id = req.params.id;
  let name = req.body.name;

  let i = jsonData.findIndex((user) => user.id == id);

  jsonData[i].name = name;

  res.send(jsonData);
});

router.post("/", (req, res) => {
  jsonData.push({ id: new Date().getTime(), ...req.body });
  res.json(jsonData);
  // fs.writeFile(
  //   path.join(__dirname, "../../files/1.json"),
  //   JSON.stringify(jsonData),
  //   (err) => {
  //     res.send("ok");
  //   }
  // );
});

router.get("/filter", (req, res) => {
  let voters = jsonData.filter((user) => user.age > 18);
  res.json(voters);
});

module.exports = router;

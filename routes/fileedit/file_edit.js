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

router.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "./name.json"), "utf8", (err, data) => {
    if (err) {
      throw err;
      return;
    }
    console.log(data);
    res.send(data);
  });
});

var obj = {
  users: [],
};

router.post("/", (req, res) => {
  fs.readFile(path.join(__dirname, "./name.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data);
      obj.users.push({ id: new Date().getTime(), name: req.body.name });
      res.json(obj);
      const Json = JSON.stringify(obj, null, 2);
      fs.writeFile(path.join(__dirname, "./name.json"), Json, "utf8", (err) => {
        if (err) {
          console.log(err);
        }
      }); //
    }
  });
});

// var obj = {
//   users: [],
// };
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  let index;
  fs.readFile(path.join(__dirname, "./name.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data);
      console.log("data:", obj);

      for (let i = 0; i <= obj.users.length - 1; i++) {
        if (id == obj.users[i].id) {
          index = i;
          console.log(obj.users.splice(index, 1));
        }

        //  let deletedIndex = obj.users.findIndex((user)=> user.id = id)
        //  console.log(obj.users.findIndex((user)=> user.id = ids));
        //  console.log("deletedIndex",deletedIndex);

        // obj.users.splice(deletedIndex,1)
        // res.json(obj);
      }
      console.log("INDEX", index);
      console.log(obj);
      res.send(obj);
      console.log("FinalData :::::::::::", obj);
      let updatedData = JSON.stringify(obj, null, 2);
      fs.writeFile(
        path.join(__dirname, "./name.json"),
        updatedData,
        "utf8",
        (err) => {
          if (err) {
            console.log(err);
          }

          console.log(obj);
        }
      );
    }
  });
});

router.patch("/:id", (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let index;
  fs.readFile(path.join(__dirname, "./name.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data);
      console.log("data:", obj);
      // let i = obj.users.findIndex((user) => (user.id = id));
      for (i = 0; i <= obj.users.length - 1; i++) {
        if (id == obj.users[i].id) {
          index = i;
          obj.users[i].name = name;
          console.log(obj.users[i].name);
        }
      }
      console.log("INDEX::", index);
      let updatedData = JSON.stringify(obj, null, 2);
      fs.writeFile(
        path.join(__dirname, "./name.json"),
        updatedData,
        "utf8",
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
    res.send(obj)
  });
});
module.exports = router;

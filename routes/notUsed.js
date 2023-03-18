// var express = require('express');
// var router = express.Router();
// const fs = require("fs");
// const crypto = require("crypto-js");
// const { ObjectId } = require('mongodb');
// //const salt = "guinea pigs are awesome";

// /* GET users listing. */
// router.get('/', function(req, res, next) {

//   req.app.locals.db.collection("users").find().toArray()
//   .then(result => {
//     console.log("result from GET users", result);
//     res.json(result);
//   })
// });

// router.get('/:userId', function(req, res, next) {
//   userId = req.params.userId;
//   console.log(userId);

// req.app.locals.db.collection("users").findOne({"_id": new ObjectId(userId)})
// .then(result => {
//   console.log("Found user", result);

//   res.json(result)
// })

//   /*let findUser = users.find(user => user.id == userId);

//   res.json(findUser);*/
// });

// router.post('/', function(req, res, next) {
//   let newUser = { name: req.body.name };
//   let passwordToSave = crypto.SHA3(req.body.password).toString();
//   newUser.password = passwordToSave;

//   console.log("new user", newUser)

//   req.app.locals.db.collection("users").insertOne(newUser)
//   .then(result => {
//     console.log("result från db", result);
//     res.json(result);
//   })
// });

// router.post('/login', function(req, res, next) {
//     const { name, password } = req.body;
//     console.log("username", name, password);

//     req.app.locals.db.collection("users").findOne({"name": new ObjectId(name)})
//     .then(result => {
//     console.log("Found user", result);

//     if(crypto.SHA3(password).toString() === req.body.password) {
//         //res.status(201).json({name: foundUser.name, id: foundUser.id})
//         res.json(result)
//     }
//     })

//     const foundUser = req.app.locals.db.collection("users").findOne(name);
    

//   /*fs.readFile("users.json", function(err, data){
//     if(err) {
//       console.log(err)
//     }
//     let users = JSON.parse(data);
//     const foundUser = users.find(user => user.name === name);
//     if(crypto.SHA3(password).toString() === foundUser.password) {
//    // if(password === crypto.AES.decrypt(foundUser.password, salt).toString(crypto.enc.Utf8)) {
//       res.status(201).json({name: foundUser.name, id: foundUser.id})
//     }
//     else {
//       res.status(401).json("Incorrect password or username")
//     }
//     return;
//   }
//   )*/
// });

// module.exports = router;

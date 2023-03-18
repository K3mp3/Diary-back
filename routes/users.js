var express = require('express');
var router = express.Router();
const fs = require("fs");
const crypto = require("crypto-js");
const { ObjectId } = require('mongodb');
const BlogModel = require ("../models/blog_models");
const UserModel = require ("../models/user_models");



/* GET users listing. */
router.get('/', async(req, res, next) => {
  const allUsers = await UserModel.find();
  res.status(200).json(allUsers);
   
  /*req.app.locals.db.collection("users").find().toArray()
  .then(result => {
    console.log("result from GET users", result);
    res.json(result);
  })*/
});

router.put("/", async(req, res) => {
  const {_id, username} = req.body;
  const user = await UserModel.findById({_id});

  user.username = username;
  await user.save();
  res.status(200).json(user);
})

router.delete("/:id", async(req, res) => {
  await UserModel.findByIdAndDelete({_id: req.params.id});
  res.status(200).json("User successfully deleted!");
})

router.get('/blog', async (req, res, next) => {
  const blogPost = await BlogModel.find().populate("author");
  res.status(200).json(blogPost);
});

router.get("/:userId", async(req, res) => {
  userId = req.params.userId;
  console.log(userId);

  const findUser = await UserModel.findOne({"_id": new ObjectId(userId)})
  .then(result => {
    console.log("Found user", result);
    res.json(result);
  })
})

router.post("/", async(req, res) => {
  let newUser = { username: req.body.username };
  let passwordToSave = crypto.SHA3(req.body.password).toString();
  newUser.password = passwordToSave;
  const savedUser = await UserModel.create(newUser)
  res.status(201).json(savedUser);
})

/*router.post("/blog", async (req, res) => {
  const newBlogPost = await BlogModel.create(req.body);
  res.status(201).json(newBlogPost);
})*/

router.post("/login", async(req, res) => {
  const {username, password} = req.body;
  console.log("username and password", username, password)
  const foundUser = await UserModel.findOne({username: username});

  if(crypto.SHA3(password).toString() === foundUser.password) {
    res.status(201).json({username: foundUser.username, id: foundUser._id})
  } else {
    console.log("fel");
  }
  return;
})

module.exports = router;

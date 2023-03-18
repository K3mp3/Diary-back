const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");

const BlogUser = mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model("bloguser", BlogUser);
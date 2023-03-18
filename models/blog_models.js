const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose"); 

const BlogpostSchema = mongoose.Schema({
    author: {
        type: [mongoose.Types.ObjectId],
        ref: "user",
        required: true
    },

    title: {
        type: String,
        required: true
    }, 
    body: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("blogpost", BlogpostSchema);
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
//const notUsedRouter = require("./routes/users");
const mongoose = require("mongoose");

require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;

const app = express();

/*MongoClient.connect(process.env.MONGODB_URI)
.then(client => {
    console.log("Connected to the database!");
    const db = client.db("diaryProject");
    app.locals.db = db;
})
.catch(err => console.log("err", err));*/

async function init() {
    try {
        const options = {useNewUrlParser: true, useUnifiedTopology: true};
        await mongoose.connect(process.env.MONGODB_URI, options); 
        console.log("connected to the database!");   
    } catch (error) {
        console.error(error);
    }
}

init();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use("/notUsed", notUsedRouter);

module.exports = app;

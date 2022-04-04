//will be using require and module.exports because the class was not taught with ES6 import/export statements

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
router = require('./router.js')
const mongoose = require('mongoose')

//DB Setup
mongoose.connect('mongodb://127.0.0.1')

//App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);


//Server Setup
const port = process.env.Port || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server Listening on:', port);
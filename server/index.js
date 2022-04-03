const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
router = require('./router.js')

//App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);


//Server Setup
const port = process.env.Port || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server Listening on:', port);
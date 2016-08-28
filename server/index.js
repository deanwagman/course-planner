const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');

// Server Logs
app.use(morgan('combined'));

// We want to use JSON mostly, so here we go
app.use(bodyParser.json({ type: '*/*' }));

// The Router
// router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);

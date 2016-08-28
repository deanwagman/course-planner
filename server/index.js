const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./controllers/');
const storage = require('node-persist');

// In Memory Storage
storage.init({
    dir:'./data/persist',
    encoding: 'utf8',
    logging: true,
    continuous: true
});

// Server Logs
app.use(morgan('combined'));

// We want to use JSON mostly, so here we go
app.use(bodyParser.json({ type: '*/*' }));

// Add our static asset middleware
app.use(express.static(__dirname + '/dist'));

// The Router
app.use(router);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

// Beep Boop
server.listen(port, function() {
  console.log("Server listening on:", port);
});

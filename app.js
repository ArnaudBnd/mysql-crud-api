var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes/index');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/', routes);

// set the app to listen on the port
app.listen(3000, () => {
    console.log(`Server running on port: ${3000}`);
});

module.exports = app;
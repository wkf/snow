var express = require('express'),
    port    = 8888;

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('Listening on ' + port + ' in ' + app.settings.env + ' mode ...');
console.log('Press Ctrl + C to stop.');

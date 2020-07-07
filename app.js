var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
});
app.get('/game', function(req, res) {
  res.sendFile(path.join(__dirname + '/game.html'))
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
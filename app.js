var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/whoami', function(req, res) {
  var ip = req.headers['x-forwarded-for'];
  var language = req.headers['accept-language'].split(',')[0];
  var os = req.headers['user-agent'].split(/[\(\)]/)[1];

  res.json({
    IP: ip,
    language: language,
    OS: os
  });
});

app.use(function(req, res) {
  res.send('404: Page not found', 404);
});

app.listen(port, console.log('Server is listening at port ' + port + '.'));

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api', function(req, res) {
  var ip = req.connection.remoteAddress;
  var language = req.headers['accept-language'].split(',')[0];
  var os = req.headers['user-agent'].split(/[\(\)]/)[1];

  res.json({IP: ip, language: language, OS: os});
});

app.listen(port, console.log('Server is listening at port ' + port + '.'));

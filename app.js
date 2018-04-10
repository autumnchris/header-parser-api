const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/whoami', (req, res) => {
  const IP = req.headers['x-forwarded-for'];
  const language = req.headers['accept-language'].split(',')[0];
  const OS = req.headers['user-agent'].split(/[\(\)]/)[1];

  res.json({
    IP,
    language,
    OS
  });
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'), 404);
});

app.listen(port, console.log(`Server is listening at port ${port}.`));

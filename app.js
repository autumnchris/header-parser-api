const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.headers['x-forwarded-for'].split(',')[0],
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].split(/[\(\)]/)[1]
  });
});

app.use((req, res) => {
  res.status(404).sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, console.log(`Server is listening at port ${port}.`));

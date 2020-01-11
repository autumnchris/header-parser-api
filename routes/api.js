const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    ipaddress: req.headers['x-forwarded-for'].split(',')[0],
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].split(/[\(\)]/)[1]
  });
});

module.exports = router;

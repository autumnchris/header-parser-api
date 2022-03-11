const express = require('express');
const headerParserController = require('../controllers/header-parser-controller');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/whoami', headerParserController.parseHeader);

module.exports = router;

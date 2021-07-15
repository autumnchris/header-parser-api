const express = require('express');
const headerParserController = require('../controllers/header-parser-controller');
const router = express.Router();

router.get('/', headerParserController.parseHeader);

module.exports = router;

'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../src/controllers/customer-control');

router.post('/', controller.post);

module.exports = router;
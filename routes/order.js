'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../src/controllers/order-control');

router.post('/', controller.post);
router.get('/', controller.get);

module.exports = router;
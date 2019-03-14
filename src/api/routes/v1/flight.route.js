const express = require('express');
const controller = require('../../controllers/flight.controller');


const router = express.Router();

router
  .route('/')
  .get(controller.getList);

module.exports = router;

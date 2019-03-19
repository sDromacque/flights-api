const express = require('express');
const controller = require('../../controllers/flight.controller');


const router = express.Router();

router
  .route('/')
  /**
   * @api {get} v1/flight List flight
   * @apiDescription Get a list of flights
   * @apiVersion 1.0.0
   * @apiName Flight
   * @apiGroup Flight
   *
   * @apiSuccess {Object[]} array of flight.
   *
   * @apiError (Ok 200)  Return a list of flights
   * @apiError (Forbidden 403)     Forbidden     Limit request api
   */
  .get(controller.getList);

module.exports = router;

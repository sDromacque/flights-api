const express = require('express');

const router = express.Router();
const flightRoutes = require('./flight.route');

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/flight', flightRoutes);
module.exports = router;

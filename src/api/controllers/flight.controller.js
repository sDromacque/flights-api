const axios = require('axios');
const _ = require('lodash');
const httpStatus = require('http-status');
const mockaroo = require('../services/mockaroo');
const parser = require('../services/parseData');

const errorLimitMockarro = 'Free accounts are limited to 200 requests per day.';

exports.getList = (req, res, next) => {
  axios.all([
    mockaroo.getDataAirMoon(),
    mockaroo.getDataAirBeam(),
    mockaroo.getDataAirJazz(),
  ]).then(axios.spread((dataFromMoon, dataFromBeam, dataFromJazz) => {
    const dataJson = parser.csvToJson(dataFromBeam.data);
    const dataFromBeamFormat = parser.formatDataBeam(dataJson);
    const dataFromJazzFormat = parser.formatDataJazz(dataFromJazz.data);
    const dataFromMoonFormat = parser.formatDataJazz(dataFromMoon.data);

    let allResults = [
      ...dataFromBeamFormat,
      ...dataFromJazzFormat,
      ...dataFromMoonFormat,
    ];

    // order by price and limit size of array
    allResults = _.orderBy(allResults, 'price').slice(0, 49);

    res.status(httpStatus.OK).json(allResults);
  }))
    .catch(() => {
      res.status(httpStatus.FORBIDDEN).json({ error: errorLimitMockarro });
    });
};

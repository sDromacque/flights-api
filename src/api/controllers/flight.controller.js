const axios = require('axios');
const _ = require('lodash');
const httpStatus = require('http-status');
const mockaroo = require('../services/mockaroo');
const parser = require('../services/parseData');

exports.getList = (req, res, next) => {
  axios.all([mockaroo.getDataAirMoon(), mockaroo.getDataAirJazz(), mockaroo.getDataAirBeam()])
    .then(axios.spread((dataFromMoon, dataFromJazz, dataFromBeam) => {
      const dataJson = parser.csvToJson(dataFromBeam.data);
      const dataFromBeamFormat = parser.formatDataBeam(dataJson);
      const dataFromJazzFormat = parser.formatDataJazz(dataFromJazz.data);
      const dataFromMoonFormat = parser.formatDataMoon(dataFromMoon.data);

      const allResults = [
        ...dataFromBeamFormat,
        ...dataFromJazzFormat,
        ...dataFromMoonFormat,
      ].sort().slice(50);

      res.status(httpStatus.OK).json(allResults);
    }))
    .catch((err) => {
      res.status(httpStatus.FORBIDDEN).json(err);
    });
};

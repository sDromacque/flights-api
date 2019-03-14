const httpStatus = require('http-status');
const axios = require('axios');

function getDataAirMoon() {
  return axios.get('https://my.api.mockaroo.com/flight/air-moon?key=52445410')
}

function getDataAirJazz() {
  return axios.get('https://my.api.mockaroo.com/flight/air-jazz?key=52445410')
}

function getDataAirBeam() {
  return axios.get('https://my.api.mockaroo.com/flight/air-beam?key=52445410')
}

exports.getList = (req, res, next) => {
  axios.all([getDataAirMoon(), getDataAirJazz(), getDataAirBeam()])
    .then(axios.spread((a, b, c) => {
      console.log(c)
      res.send(c.data);
    }));
};

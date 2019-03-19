const axios = require('axios');

exports.getDataAirMoon = async () => {
  return axios.get('https://my.api.mockaroo.com/flight/air-moon?key=52445410');
};

exports.getDataAirJazz = async () => {
  return axios.get('https://my.api.mockaroo.com/flight/air-jazz?key=52445410');
};

exports.getDataAirBeam = async () => {
  return axios.get('https://my.api.mockaroo.com/flight/air-beam?key=52445410');
};

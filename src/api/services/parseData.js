const _ = require('lodash');

const AIR_BEAM = 'AIR_BEAM';
const AIR_JAZZ = 'AIR_JAZZ';
const AIR_MOON = 'AIR_MOON';


function addProvider(data, source) {
  const newFormatData = [];

  _.map(data, (item) => {
    item.provider = source;
    newFormatData.push(item);
  });

  return newFormatData;
}

/**
 * Convert data on format csv to format JSON
 */
exports.csvToJson = (csv) => {
  const content = csv.split('\n');
  const header = content[0].split(',');
  return _.tail(content).map(row => _.zipObject(header, row.split(',')));
};

exports.formatDataJazz = (data) => {
  const dataWithProvider = addProvider(data, AIR_JAZZ);

  return dataWithProvider.map(item => ({
    provider: item.provider,
    price: item.price,
    departure_time: item.dtime,
    arrival_time: item.atime,
  }));
};

exports.formatDataMoon = (data) => {
  const dataWithProvider = addProvider(data, AIR_MOON);

  return dataWithProvider.map(item => ({
    provider: item.provider,
    price: item.price,
    departure_time: item.departure_time,
    arrival_time: item.arrival_time,
  }));
};

exports.formatDataBeam = (data) => {
  const dataWithProvider = addProvider(data, AIR_BEAM);

  return dataWithProvider.map(item => ({
    provider: item.provider,
    price: item.price,
    departure_time: item.departure_time,
    arrival_time: item.arrival_time,
  }));
};


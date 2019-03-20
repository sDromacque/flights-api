const airMoon = require('../../services/mockaroo').getDataAirMoon;
const airJazz = require('../../services/mockaroo').getDataAirJazz;
const { expect } = require('chai');

/*
* Test the /GET microservices
*/
describe('/GET data', () => {
  it('it should GET all the air jazz', () => {
    return airJazz()
      .then((res) => {
        expect(res.data[0]).to.have.a.property('id');
        expect(res.data[0]).to.have.a.property('price');
        expect(res.data[0]).to.have.a.property('dtime');
        expect(res.data[0]).to.have.a.property('atime');
        expect(res.data).to.be.an('array');
      });
  });
  it('it should GET all the air moon', () => {
    return airMoon()
      .then((res) => {
        expect(res.data[0]).to.have.a.property('id');
        expect(res.data[0]).to.have.a.property('price');
        expect(res.data[0]).to.have.a.property('departure_time');
        expect(res.data[0]).to.have.a.property('arrival_time');
        expect(res.data).to.be.an('array');
      });
  });
});


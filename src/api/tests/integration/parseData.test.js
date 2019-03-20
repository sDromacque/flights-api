const parser = require('../../services/parseData');
const { expect } = require('chai');

describe('Service parser', () => {
  describe('formatDataMoon', () => {
    it('sould return array with provider', () => {
      const data = [{ id: 1, price: 5, departure_time: 5, arrival_time: 5 }];
      const result = parser.formatDataBeam(data);

      expect(result).to.be.an('array');
      expect(result[0]).to.have.a.property('provider');
      expect(result[0].provider).to.equal('AIR_BEAM');
      expect(result[0]).to.have.a.property('price');
      expect(result[0]).to.have.a.property('departure_time');
      expect(result[0]).to.have.a.property('arrival_time');
    });
  });

  describe('formatDataJazz', () => {
    it('sould return array with provider', () => {
      const data = [{ id: 1, price: 5, departure_time: 5, arrival_time: 5 }];
      const result = parser.formatDataJazz(data);

      expect(result).to.be.an('array');
      expect(result[0]).to.have.a.property('provider');
      expect(result[0].provider).to.equal('AIR_JAZZ');
      expect(result[0]).to.have.a.property('price');
      expect(result[0]).to.have.a.property('departure_time');
      expect(result[0]).to.have.a.property('arrival_time');
    });
  });

  describe('formatDataBeam', () => {
    it('sould return array with provider', () => {
      const data = [{ id: 1, price: 5, departure_time: 5, arrival_time: 5 }];
      const result = parser.formatDataBeam(data);

      expect(result).to.be.an('array');
      expect(result[0]).to.have.a.property('provider');
      expect(result[0].provider).to.equal('AIR_BEAM');
      expect(result[0]).to.have.a.property('price');
      expect(result[0]).to.have.a.property('departure_time');
      expect(result[0]).to.have.a.property('arrival_time');
    });
  });
});

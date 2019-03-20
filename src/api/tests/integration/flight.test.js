/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');

const app = require('../../../index');

describe('Flight API', async () => {
  describe('GET /v1/flight', () => {
    it('should return 200 where request is valid', () => {
      return request(app)
        .get('/v1/flight')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
        });
    });
  });
});

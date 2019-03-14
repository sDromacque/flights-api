// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const { port, env } = require('./config/vars');
const app = require('./config/express');

(async function startDbThenServer() {
  await app.listen(port, () => {
    console.log(`App running on port ${port} (${env}).`);
  });
}());

/**
* Exports express
* @public
*/
module.exports = app;

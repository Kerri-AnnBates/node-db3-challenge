const knex = rquire('knex');
const config = require('../knexfile');

module.exports = knex(config.development);
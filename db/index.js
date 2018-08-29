const { Pool } = require('pg')
const { Postgre_config } = require('../config');

const pool = new Pool(Postgre_config);

module.exports = {
  query: (text, params) => pool.query(text, params)
}
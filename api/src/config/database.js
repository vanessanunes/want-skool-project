
const { Pool } = require('pg')
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('Base de Dados conectada com sucesso!')
})

modeule.exports = {
  query: (text, params) => pool.query(text, params)
};


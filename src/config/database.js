
const { Pool } = require('pg')
const dotenv = require('dotenv');

dotenv.config();

console.log("estamos na conexão de dados")
console.log(process.env.DATABASE_URL)

const pool = new Pool({
  host: 'localhost',
  username: 'postgres',
  password: '2545',
  database: 'wantskool'
})


pool.on('connect', () => {
  console.log('Base de Dados conectada com sucesso!')
})

module.exports = {
  query: (text, params) => pool.query(text, params)
};


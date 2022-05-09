
const { Pool } = require('pg')
const dotenv = require('dotenv');

dotenv.config();

console.log("estamos na conexão de dados")
console.log(process.env.DATABASE_URL)

const pool = new Pool({
  host: "process.env.POSTGRES_DB",
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB
})


pool.on('connect', () => {
  console.log('Base de Dados conectada com sucesso!')
})

module.exports = {
  query: (text, params) => pool.query(text, params)
};


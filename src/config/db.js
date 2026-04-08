const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
});

//Conexão da biblioteca pg
//'puxar' a conexão feita no .env e exportar para os outros arquivos

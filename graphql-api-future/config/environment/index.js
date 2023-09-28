const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;

// Você pode usar isso como um objeto com propriedades booleanas para diferentes situações
const env = {
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  staging: process.env.NODE_ENV === 'staging',
  production: process.env.NODE_ENV === 'production',
};

module.exports = { port, env };
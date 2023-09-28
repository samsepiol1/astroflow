const { port } = require('./config/environment');

//import app from './app';

const {app} = require('./app')

const start = async () => {
  try {
    await app.listen(port);
    console.log(`🚀  GraphQL server running at port: ${port}`);
  } catch {
    console.log('Not able to run GraphQL server');
  }
};

start();
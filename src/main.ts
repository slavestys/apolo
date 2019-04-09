import 'reflect-metadata';
import { createConnection } from 'typeorm';
import Server from './server';


createConnection().then(async (connection) => {
  Server.start();

  const shutdown = done => {};

  // Nodemon
  process.on('exit', shutdown.bind(null, process.exit));
  process.on('SIGINT', shutdown.bind(null, process.exit));
  process.on('uncaughtException', shutdown.bind(null, process.exit));
});

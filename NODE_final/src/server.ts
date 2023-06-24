import express from 'express';
import morgan from 'morgan';

import { env } from './config/env';
import { apiRoutes } from './routes/init';

const server = express();

server.use(express.json());
if (env.environment === 'development') server.use(morgan('dev'));
server.get('/healthz', (req, res) => res.status(200).send('server runs...'));

server.listen(env.port, () =>
  console.log(`server runs on port=${env.port} in environment=${env.environment}`)
);

// routes
server.use(apiRoutes);

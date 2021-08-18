import express from 'express';
import { configHelmet, configCors } from './config/server/server.config.js';
import { env } from './config/environments/index.js';
import { loadControllers } from './config/loaders/controller.loader.js';
import { authenticate, syncDb } from './config/loaders/db.loader.js';

const app = express();

configHelmet(app);
configCors(app);
authenticate();
syncDb();
loadControllers(app);

app.listen(Number(env.serverPort), () => {
    console.log(`Running server on port: ${env.serverPort}`);
});

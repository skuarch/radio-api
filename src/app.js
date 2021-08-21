import express from 'express';
import { configHelmet, configCors } from './config/server/server.config.js';
import { env } from './config/environments/index.js';
import { loadControllers } from './config/loaders/controller.loader.js';
import { authenticateDb, syncDb } from './config/loaders/db.loader.js';
import { shutdownHook } from './config/loaders/shutdown.loader.js';

const app = express();

configHelmet(app);
configCors(app);
authenticateDb();
syncDb();
loadControllers(app);

const server = app.listen(Number(env.serverPort), () => {
    console.log(`Running server on port: ${env.serverPort}`);
});

shutdownHook(server);

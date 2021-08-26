import express from 'express';
import { configHelmet, configCors } from './config/server/server.config.js';
import { env } from './config/environments/index.js';
import { loadControllers } from './config/loaders/controller.loader.js';
import { authenticateDb, syncDb } from './config/loaders/db.loader.js';
import { shutdownHook } from './config/loaders/shutdown.loader.js';
import { cert } from './config/loaders/certificate.loader.js';
import { loadStaticContent } from './config/loaders/static.loader.js';

const app = express();

configHelmet(app);
configCors(app);
authenticateDb();
syncDb();
loadControllers(app);
loadStaticContent(app);

const httpServer = app.listen(Number(env.httpServerPort), () => {
    console.log(`Running server on port: ${env.httpServerPort}`);    
});

const httpsServer = app.listen(Number(cert, env.httpsServerPort), () => {
    console.log(`Running server on port: ${env.httpsServerPort}`);    
});

shutdownHook(httpServer);
shutdownHook(httpsServer);

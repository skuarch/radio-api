import express from 'express';
import { configHelmet, configCors } from './config/server/server.config.js';
import { env } from './config/environments/index.js';
import { loadControllers } from './config/loaders/controller.loader.js';
import { authenticateDb, syncDb } from './config/loaders/db.loader.js';
import { shutdownHook } from './config/loaders/shutdown.loader.js';
// import { cert } from './config/loaders/certificate.loader.js';
import { loadStaticContent } from './config/loaders/static.loader.js';
import http from 'http';
import https from 'https';

const app = express();

configHelmet(app);
configCors(app);
authenticateDb();
syncDb();
loadControllers(app);
loadStaticContent(app);

export const httpServer = http.createServer(app);
export const httpsServer = https.createServer(app);

httpServer.listen(env.httpServerPort, () => {
  console.log(`HTTP Server running on port ${env.httpServerPort}`);
});


httpsServer.listen(env.httpsServerPort, () => {
  console.log(`HTTPS Server running on port ${env.httpsServerPort}`);
});

shutdownHook(httpServer);
shutdownHook(httpsServer);

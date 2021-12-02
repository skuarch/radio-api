import express from 'express';
import { configHelmet, configCors } from './config/server/server.config.js';
import { env } from './config/environments/index.js';
import { loadControllers } from './config/loaders/controller.loader.js';
import { authenticateDatabase, syncDatabase } from './config/loaders/db.loader.js';
import { shutdownHook } from './config/loaders/shutdown.loader.js';
import { cert } from './config/loaders/certificate.loader.js';
import { loadStaticContent } from './config/loaders/static.loader.js';
import http from 'http';
import https from 'https';
import { logger } from './services/logger.service.js';

const app = express();

configHelmet(app);
// configCors(app);
authenticateDatabase();
syncDatabase();
loadControllers(app);
loadStaticContent(app);

export const httpServer = http.createServer(app);
export const httpsServer = https.createServer(cert, app);

httpServer.listen(env.httpServerPort, () => {
  logger.debug(`HTTP Server running on port ${env.httpServerPort}`);  
});


httpsServer.listen(env.httpsServerPort, () => {
  logger.debug(`HTTPS Server running on port ${env.httpsServerPort}`);  
});

shutdownHook();

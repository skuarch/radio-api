import { httpServer, httpsServer } from '../app.js';
import { shutdown } from '../config/loaders/shutdown.loader.js';

export const poweroffService = () => {
    shutdown(httpsServer);
    shutdown(httpServer);
}
import { httpServer, httpsServer } from '../app.js';
import { closeDbConnections } from './sequelize.service.js';

export const shutdownServer = async (server) => {
    server.close(() => console.log('Server closed'));    
}

export const shutdownServerAndCloseDbConnections = async() => {
    closeDbConnections();
    await shutdownServer(httpsServer);
    await shutdownServer(httpServer);
    scheduleExit();
}

const scheduleExit = () => {
    setTimeout(() => process.exit(), 5000);
}
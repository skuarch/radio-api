import { shutdownServerAndCloseDbConnections } from '../../services/poweroff.service.js';
import { logger } from '../../services/logger.service.js';


export const shutdownHook = () => {
    process.on('SIGTERM', () => {
        logger.warn('SIGTERM signal received: closing server\n');
        shutdownServerAndCloseDbConnections();       
    });
    
    process.on('SIGINT', () => {
        logger.warn('SIGINT signal received: closing server\n')
        shutdownServerAndCloseDbConnections(); 
    });    
    
    process.on('exit', () => {
        logger.warn('App server off!');
    });
}

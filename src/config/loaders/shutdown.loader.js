import { shutdownServerAndCloseDbConnections } from '../../services/poweroff.service.js';


export const shutdownHook = () => {
    process.on('SIGTERM', () => {
        console.log('SIGTERM signal received: closing server\n');
        shutdownServerAndCloseDbConnections();       
    });
    
    process.on('SIGINT', () => {
        console.log('SIGINT signal received: closing server\n')
        shutdownServerAndCloseDbConnections(); 
    });    
    
    process.on('exit', () => {
        console.log('App server off!');
    });
}

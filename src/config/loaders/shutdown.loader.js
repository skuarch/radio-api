import { sequelize } from "./db.loader.js";

export const shutdown = server => {
    sequelize.close()
        .then(() => console.log('DB connections are closed'))
        .catch(e => console.log(e));        
    server.close(() => console.log('Server closed'));            
    setTimeout(() => process.exit(), 5000);    
}

export const shutdownHook = (server) => {
    process.on('SIGTERM', () => {
        console.log('SIGTERM signal received: closing server\n');
        shutdown(server);
    });
    
    process.on('SIGINT', () => {
        console.log('SIGINT signal received: closing server\n')
        shutdown(server);
    });    
    
    process.on('exit', () => {
        console.log('App server off!');
    });
}

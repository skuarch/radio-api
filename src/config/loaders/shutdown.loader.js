import { sequelize } from "./db.loader.js";


export const shutdownHook = (server) => {
    process.on('SIGTERM', () => {
        console.log('SIGTERM signal received: closing HTTP server')
        sequelize.close()
            .then(console.log('Closing db connections'))
            .catch(e => console.log(e))
            .finally(
                server.close(() => {
                    console.log('HTTP server closed');
                })
            );
    });
    
    process.on('SIGINT', () => {
        console.log('SIGINT signal received: closing HTTP server')
        sequelize.close()
            .then(console.log('Closing db connections'))
            .catch(e => console.log(e))
            .finally(
                server.close(() => {
                    console.log('HTTP server closed');
                })
            );
    });
    
    process.on('exit', () => {
        console.log('Exit 0');
    });
}

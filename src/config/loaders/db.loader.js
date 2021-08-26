import { Sequelize } from 'sequelize';
import { env } from '../environments/index.js';

export const sequelize = new Sequelize(env.databaseName, env.databaseUser, env.databasePassword, {
    dialect: 'postgres',
    host: env.databaseHost,
    pool: {
        max: 4,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export const authenticateDb = () => {
    sequelize.authenticate()
        .catch(error => {
            console.log('ERROR: ', error);
            process.exit();
        });
}

export const syncDb = async () => {
    await sequelize.sync({ force: env.forceSyncDb })
        .catch(error => {
            console.log('ERROR:',  error);
        });
}
import { Sequelize } from 'sequelize';
import { env } from '../config/environments/index.js';
import { logger } from './logger.service.js';

const sequelize = new Sequelize(env.databaseName, env.databaseUser, env.databasePassword, {
    dialect: 'postgres',
    host: env.databaseHost,
    pool: {
        max: 4,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export const closeDbConnections = () => {
    sequelize.close()
        .then(() => logger.warn('DB connections are closed'))
        .catch(e => logger.error(e));
}

export const authenticateDb = () => {
    sequelize.authenticate()
        .catch(error => {
            logger.error(error);
            process.exit();
        });
}

export const syncDb = async () => {
    await sequelize.sync({ force: env.forceSyncDb })
        .catch(error => {
            logger.error(error);
        });
}

export const createModel = ({ tableName, tableFields, tableOptions }) => {
   return sequelize.define(tableName, tableFields, tableOptions);
}

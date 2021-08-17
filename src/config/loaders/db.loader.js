import Sequelize from 'sequelize';
import env from '../environments/index.js';

const loadDb = () => {    

    const sequelize = new Sequelize(env.databaseName, env.databaseUser, env.databasePassword, {
        dialect: 'postgres',
        host: env.databaseHost
        ,
        pool: {
            max: 4,
            min: 0,
            acquire: 30000,
            idle: 10000
          }
    });

    sequelize.authenticate();
}

export default loadDb;

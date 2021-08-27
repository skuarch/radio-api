import { sequelize } from '../../services/sequelize.service.js';

export const authenticateDb = () => {
    sequelize.authenticate();
}

export const syncDb = async () => {
    await sequelize.sync();
}
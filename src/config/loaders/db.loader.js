import { authenticateDb, syncDb } from '../../services/sequelize.service.js';

export const authenticateDatabase = () => {
    authenticateDb();
}

export const syncDatabase = async () => {
    await syncDb();
}

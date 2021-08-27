import DataTypes from 'sequelize';
import { createModel } from '../services/sequelize.service.js';

const tableOptions = {
    freezeTableName: true
};

const tableFields = {
    client_info_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    appCodeName: {
        type: DataTypes.STRING
    },
    appName: {
        type: DataTypes.STRING
    },
    appVersion: {
        type: DataTypes.STRING
    },
    cookieEnabled: {
        type: DataTypes.BOOLEAN
    },
    language: {
        type: DataTypes.STRING
    },
    pageon: {
        type: DataTypes.STRING
    },
    screenAvailHeight: {
        type: DataTypes.INTEGER
    },
    screenAvailWidth: {
        type: DataTypes.INTEGER
    },
    screenHeight: {
        type: DataTypes.STRING
    },
    screenWith: {
        type: DataTypes.STRING
    },
    platform: {
        type: DataTypes.STRING
    },
    referer: {
        type: DataTypes.STRING
    },
    product: {
        type: DataTypes.STRING
    },
    userAgent: {
        type: DataTypes.STRING        
    }

};

export const ClientInfo = createModel({tableName: 'client_info', tableFields: tableFields, tableOptions: tableOptions});

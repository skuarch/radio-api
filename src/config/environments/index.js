import { environments } from './environments.js';

const getEnvironment = () => {

    if (!process.env.NODE_ENV) {
        throw new Error('NODE_ENV is undefinied, process.env.NODE_ENV:' + process.env.NODE_ENV);
    }

    if (!environments) {
        throw new Error('NODE_ENV is undefinied or not exits, env: ' + NODE_ENV);
    }

    return environments[process.env.NODE_ENV];
}

export const env = getEnvironment();

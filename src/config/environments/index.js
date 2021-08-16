import environment from './environments.js';

let env;
const getEnvironment = () => {

    if (!process.env.NODE_ENV) {
        throw new Error('NODE_ENV is undefinied, process.env.NODE_ENV:' + process.env.NODE_ENV);
    }

    if (!environment) {
        throw new Error('NODE_ENV is undefinied or not exits, env: ' + NODE_ENV);
    }

    return environment[process.env.NODE_ENV];
}

env = getEnvironment();
export default env;

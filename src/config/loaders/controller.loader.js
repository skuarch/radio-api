import indexController from '../../controllers/index.controller.js';
import clientInfoController from '../../controllers/client.info.controller.js';

const loadControllers = (app) => {
    indexController(app);
    clientInfoController(app);
}

export default loadControllers;
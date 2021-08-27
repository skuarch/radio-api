import { indexController } from '../../controllers/index.controller.js';
import { clientInfoController } from '../../controllers/client.info.controller.js';
import { powerOffController } from '../../controllers/poweroff.controller.js';

export const loadControllers = (app) => {
    indexController(app);
    clientInfoController(app);
    powerOffController(app);
}

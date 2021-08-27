import { shutdownServerAndCloseDbConnections } from '../services/poweroff.service.js';
import { endPoints } from '../models/endpoints.js';

export const powerOffController = (app) => {

    app.get(endPoints.powerOff, (req, res) => {
        res.send('shuting down');
        shutdownServerAndCloseDbConnections();
    });    
}

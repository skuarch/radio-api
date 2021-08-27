import { poweroffService } from '../services/poweroff.service.js';

export const powerOffController = (app) => {

    app.get('/poweroff', function (req, res) {        
        res.send('shuting down');
        poweroffService();
    });    
}

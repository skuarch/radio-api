import express from 'express';
import { saveClientInfo } from '../services/clientInfo.service.js';
import { endPoints } from '../models/endpoints.js';
import { handlerControllerError } from '../services/error.service.js';

export const clientInfoController = (app) => {

    app.post(endPoints.clientInfo, express.json(), async (req, res, next) => {
        const result = await saveClientInfo(req.body)
            .catch(error => handlerControllerError({ error, next, res }));
        res.send(result);
    });
    
}

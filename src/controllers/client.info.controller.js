import express from 'express';
import { saveClientInfo } from '../services/clientInfo.service.js';
import { endPoints } from '../models/endpoints.js';

export const clientInfoController = (app) => {

    app.post(endPoints.clientInfo, express.json(), async (req, res, next) => {
        const result = await saveClientInfo(req.body)
            .catch(error => {
                res.status(500);
                res.send(error);
                next(error);
            });
        res.send(result);
    });
}

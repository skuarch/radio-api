import express from 'express';
import saveClientInfo from '../services/clientInfo.service';


const clientInfoController = (app) => {

    app.post('/clientInfo', express.json(), (req, res) => {
        console.log('req.body', req.body);
        saveClientInfo(req.body);
        res.send(req.body);
    });
    
}

export default clientInfoController;

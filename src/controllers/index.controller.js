import { endPoints } from "../models/endpoints.js";

export const indexController = (app) => {

    app.get(endPoints.index, (req, res) => {
        res.send('');
    });
    
}

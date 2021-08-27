import { logger } from './logger.service.js';

export const handlerControllerError = ({error, next, res}) => {
    logger.error(error);
    res.status(500).json("{error: 'internal server error'}");
    next(error);    
}
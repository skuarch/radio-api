export const handlerControllerError = ({error, next, res}) => {
    console.log('ERROR', error);
    res.status(500).json("{error: 'internal server error'}");
    next(error);    
}
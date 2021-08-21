import helmet from 'helmet';
import cors from 'cors';

export const configHelmet = (app) => {
    app.use(helmet());
}

export const configCors = (app) => {
    const corsOptions = {
        origin: [
            'http://localhost:8000',
            'http://localhost:3000',
            'https://escucharadio.com.mx',
            'http://escucharadio.com.mx',
            'http://bulmaradio.com'
        ],
        optionsSuccessStatus: 200
    }

    app.use(cors(corsOptions));
}
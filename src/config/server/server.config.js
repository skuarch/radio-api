import helmet from 'helmet';
import cors from 'cors';
import { env } from '../environments/index.js';

export const configHelmet = (app) => {
    app.use(helmet());
}

export const configCors = (app) => {
    const corsOptions = {
        origin: env.corsOrigins,
        optionsSuccessStatus: 200
    }

    app.use(cors(corsOptions));
}